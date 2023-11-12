import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';



@NgModule({
  declarations: [
    ListingComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuardianModule { }
