import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaterialModule } from '../layout/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListingComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    ListingComponent,
    MaintenanceComponent
  ]
})
export class GuardianModule { }
