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
  readonly REGISTER_BUTTON_NAME = 'Register';
  readonly UPDATE_BUTTON_NAME = 'Salvar';
  guardianTreatment: Guardian;
  emptyAddress= new Address('','','','','')
  errorMessage = '';
  isRegistering = true;
  buttonName = this.REGISTER_BUTTON_NAME;

  constructor(private guardianService: GuardianService, private activatedRoute: ActivatedRoute) {
    const editId = this.activatedRoute.snapshot.params['id'];
    if (editId) {
      this.isRegistering = false;
      this.guardianService.searchById(editId).subscribe(returnedGuardian => {
        this.guardianTreatment = returnedGuardian;
      });
    }
    this.guardianTreatment = new Guardian('','','',false,'','','',new Date(),'','',this.emptyAddress,[]);
    this.buttonName = this.isRegistering ? this.REGISTER_BUTTON_NAME : this.UPDATE_BUTTON_NAME;
  }

  register(): void {
    this.guardianService.register(this.guardianTreatment).subscribe(
      addGuardian => {
        console.log(addGuardian);
      }
    );
  }
}
