 import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/shared/model/address';
import { Guardian } from 'src/app/shared/model/guardian';
import { GuardianFirestoreService } from 'src/app/shared/services/guardian-firestore.service';
import { GuardianService } from 'src/app/shared/services/guardian.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  readonly REGISTER_BUTTON_NAME = 'Cadastrar';
  readonly UPDATE_BUTTON_NAME = 'Salvar';
  guardianTreatment: Guardian;
  errorMessage = '';
  isRegistering = true;
  buttonName = this.REGISTER_BUTTON_NAME;

  constructor(private guardianService: GuardianFirestoreService, private _snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private router: Router) {
    const editId = this.activatedRoute.snapshot.params['id'];
    if (editId) {
      this.isRegistering = false;
      this.guardianService.searchById(editId).subscribe(
        returnedGuardian => {
          this.guardianTreatment = returnedGuardian as Guardian;
        },
        error => {
          console.error('Error fetching guardian:', error);
        }
      );
    }
    this.guardianTreatment = new Guardian('', '', '', '', '', new Date(), '', '');
    this.buttonName = this.isRegistering ? this.REGISTER_BUTTON_NAME : this.UPDATE_BUTTON_NAME;
  }

  register(): void {
    if (!this.isFormValid()) {
      this._snackBar.open('Preencha todos os campos obrigatórios', 'Fechar', { duration: 5000 })
      return;
    }
  
    const today = new Date();
    const birthDate = this.guardianTreatment.dateOfBirth ? new Date(this.guardianTreatment.dateOfBirth) : undefined;
  
    if (!birthDate) {
      this._snackBar.open('Informe uma data de nascimento válida', 'Fechar', { duration: 5000 });
      return;
    }
  
    const age = today.getFullYear() - birthDate.getFullYear() - (
      today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0
    );
  
    if (age < 18) {
      this._snackBar.open('O responsável não pode ser menor de 18 anos', 'Ok', { duration: 5000 });
      return;
    }
  
    if(this.isRegistering){
      this.guardianService.register(this.guardianTreatment).subscribe(
        addedGuardian => {
          console.log('Guardian added:', addedGuardian);
          this._snackBar.open('Responsável cadastrado com sucesso', 'Fechar', { duration: 5000 });
          this.router.navigate(['/listing-guardians']);
        },
        error => {
          console.error('Error adding guardian:', error);
        }
      );
    } else {
      this.guardianService.update(this.guardianTreatment).subscribe(
        updatedGuardian => {
          console.log('Guardian updated:', updatedGuardian);
          this._snackBar.open('Responsável atualizado com sucesso', 'Ok', { duration: 5000 });
          this.router.navigate(['/listing-guardians']);
        },
        error => {
          console.error('Error updating guardian:', error);
        }
      );
    }
  }
  

  isFormValid(): boolean {
    return (
      !!this.guardianTreatment.fullName &&
      !!this.guardianTreatment.email &&
      !!this.guardianTreatment.cpf &&
      !!this.guardianTreatment.phoneNumber
    );
  }

  cpfFormat(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
  }

  phoneFormat(phone: string): string {
    phone = phone.replace(/\D/g, '');
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return phone;
  }
}
