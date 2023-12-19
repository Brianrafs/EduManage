import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListingComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports:[
    ListingComponent,
    MaintenanceComponent
  ]
})
export class GuardianModule { }
