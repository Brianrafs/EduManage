import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Address } from 'src/app/shared/model/address';
import { Guardian } from 'src/app/shared/model/guardian';
//import { GuardianFirestoreService } from 'src/app/shared/services/guardian-firestore.service';
import {SnackMenssegerService} from "../../../shared/services/snack-mensseger.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GuardianService} from "../../../shared/services/guardian.service";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit{
  readonly REGISTER_BUTTON_NAME = 'Cadastrar';
  readonly UPDATE_BUTTON_NAME = 'Salvar';
  guardianTreatment!: Guardian;
  isRegistering = true;
  buttonName = this.REGISTER_BUTTON_NAME;
  guardianForm!: FormGroup;

  constructor(
    private guardianService: GuardianService,
    private snackMenssegerService: SnackMenssegerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    const editId = this.activatedRoute.snapshot.params['id'];
    if (editId) {
      this.isRegistering = false;
      this.guardianService.searchById(editId).subscribe(
        returnedGuardian => {
          this.guardianTreatment = returnedGuardian as Guardian;
          this.buttonName = this.UPDATE_BUTTON_NAME;
          this.fillFormWithGuardianTreatment();
        },
        error => {
          this.snackMenssegerService.error('Erro ao carregar responsável:'+error);
        }
      );
    } else {
      this.guardianTreatment = new Guardian('', '', '', '', '', new Date(), '', '');
    }
  }

  ngOnInit(): void {
    this.guardianForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idCard: [''],
      cpf: ['', [Validators.required, Validators.maxLength(14), this.validateCpf.bind(this)]],
      dateOfBirth: [''],
      phoneNumber: ['', [Validators.required, Validators.maxLength(15)]],
      gender: [''],
    });

    if (this.guardianTreatment && this.isRegistering) {
      this.fillFormWithGuardianTreatment();
    }
  }

  fillFormWithGuardianTreatment(): void {
    this.guardianForm.patchValue({
      fullName: this.guardianTreatment.fullName,
      email: this.guardianTreatment.email,
      idCard: this.guardianTreatment.idCard,
      cpf: this.guardianTreatment.cpf,
      dateOfBirth: this.guardianTreatment.dateOfBirth,
      phoneNumber: this.guardianTreatment.phoneNumber,
      gender: this.guardianTreatment.gender,
    });
  }
  register(): void {
    if (this.guardianForm.invalid) {
      this.snackMenssegerService.alert('Preencha todos os campos obrigatórios');
      return;
    }

    const formValues = this.guardianForm.value;

    const today = new Date();
    const birthDate = formValues.dateOfBirth ? new Date(formValues.dateOfBirth) : undefined;

    if (!birthDate) {
      this.snackMenssegerService.error('Informe uma data de nascimento válida');
      return;
    }

    const age = today.getFullYear() - birthDate.getFullYear() - (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0
    );

    if (age < 18) {
      this.snackMenssegerService.alert('O responsável não pode ser menor de 18 anos');
      return;
    }

    if (this.isRegistering) {
      this.guardianService.register(formValues).subscribe(
        addedGuardian => {
          this.snackMenssegerService.success('Responsável '+ formValues.fullName + 'cadastrado com sucesso');
          this.router.navigate(['/listing-guardians']);
        },
        error => {
          this.snackMenssegerService.error('Erro ao cadastrar responsável '+error);
        }
      );
    } else {
      this.guardianTreatment.fullName = formValues.fullName;
      this.guardianTreatment.email = formValues.email;
      this.guardianTreatment.idCard = formValues.idCard;
      this.guardianTreatment.cpf = formValues.cpf;
      this.guardianTreatment.dateOfBirth = formValues.dateOfBirth;
      this.guardianTreatment.phoneNumber = formValues.phoneNumber;
      this.guardianTreatment.gender = formValues.gender;

      this.guardianService.update(this.guardianTreatment).subscribe(
        updatedGuardian => {
          this.snackMenssegerService.success('Responsável '+ formValues.fullName +' atualizado com sucesso');
          this.router.navigate(['/listing-guardians']);
        },
        error => {
          this.snackMenssegerService.error('Erro ao atualizar responsável '+error);
        }
      );
    }
  }

  cpfFormat(cpf: string): string {
      cpf = cpf.replace(/\D/g, '');
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      return cpf;
  }

  onCpfInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let rawCpf = inputElement.value;

    rawCpf = rawCpf.replace(/\D/g, '');

    const isValid = this.isValidCpf(rawCpf);
    const formattedCpf = this.cpfFormat(rawCpf);

    this.guardianForm.get('cpf')?.setValue(formattedCpf, { emitEvent: false });

    if (!isValid) {
      this.guardianForm.get('cpf')?.setErrors({ invalidCpf: true });
    } else {
      this.guardianForm.get('cpf')?.setErrors(null);
    }
  }

  isValidCpf(cpf: string): boolean {

    if (cpf == null) {
      return false;
    }

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      const digit = parseInt(cpf[i - 1]);

      if (isNaN(digit)) {
        return false; // Verifica se o dígito é um número válido
      }

      sum += digit * (11 - i);
    }

    remainder = (sum * 10) % 11;
    remainder = (remainder === 10 || remainder === 11) ? 0 : remainder;

    if (remainder !== parseInt(cpf[9])) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      const digit = parseInt(cpf[i - 1]);

      if (isNaN(digit)) {
        return false;
      }

      sum += digit * (12 - i);
    }

    remainder = (sum * 10) % 11;
    remainder = (remainder === 10 || remainder === 11) ? 0 : remainder;

    return remainder === parseInt(cpf[10]);
  }


  validateCpf(control: AbstractControl): { [key: string]: any } | null {
    const isValid = this.isValidCpf(control.value);
    return isValid ? null : { 'invalidCpf': true };
  }


  phoneFormat(phone: string): string {
    phone = phone.replace(/\D/g, '');
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return phone;
  }

  onPhoneInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedPhone = this.phoneFormat(inputElement.value);
    this.guardianForm.get('phoneNumber')?.setValue(formattedPhone, { emitEvent: false });
  }

  rgFormat(rg: string): string {
    rg = rg.replace(/\D/g, '');
    rg = rg.replace(/(\d)(\d{3})(\d{3})/, '$1.$2.$3');
    return rg.substring(0, 9);
  }
  onRgInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let inputRg = inputElement.value;
    inputRg = inputRg.substring(0, 9);
    const formattedRg = this.rgFormat(inputRg);
    this.guardianForm.get('idCard')?.setValue(formattedRg, { emitEvent: false });
  }
}
