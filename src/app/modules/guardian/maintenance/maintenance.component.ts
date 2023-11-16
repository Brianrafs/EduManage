import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/shared/model/address';
import { Guardian } from 'src/app/shared/model/guardian';
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

  constructor(private guardianService: GuardianService, private activatedRoute: ActivatedRoute) {
    const editId = this.activatedRoute.snapshot.params['id'];
    if (editId) {
      this.isRegistering = false;
      this.guardianService.searchById(editId).subscribe(
        returnedGuardian => {
          this.guardianTreatment = returnedGuardian;
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
    if(this.isRegistering){
      this.guardianService.register(this.guardianTreatment).subscribe(
        addedGuardian => {
          console.log('Guardian added:', addedGuardian);
        },
        error => {
          console.error('Error adding guardian:', error);
        }
      );
    } else {
      this.guardianService.update(this.guardianTreatment).subscribe(
        updatedGuardian => {
          console.log('Guardian updated:', updatedGuardian);
        },
        error => {
          console.error('Error updating guardian:', error);
        }
      );
    }
  }
}
