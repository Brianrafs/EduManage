import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeScreenComponent } from '../modules/home/home.module'

const routes: Routes = [
  {
    path: 'homepage',
    component: homeScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }