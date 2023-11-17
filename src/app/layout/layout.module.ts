import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NewUserComponent } from './new-user/new-user.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewUserComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NewUserComponent,
    MaterialModule,
    MenuComponent,
  ]
})
export class LayoutModule { }
