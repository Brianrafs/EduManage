import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingComponent} from "./modules/guardian/listing/listing.component";
import {MaintenanceComponent} from "./modules/guardian/maintenance/maintenance.component";
import { NewUserComponent } from './layout/new-user/new-user.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "listing-guardians",
    component: ListingComponent
  },
  {
    path: "register-guardian",
    component: MaintenanceComponent
  },
  {
    path: "edit-guardian/:id",
    component: MaintenanceComponent
  },
  {
    path:"new-user",
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
