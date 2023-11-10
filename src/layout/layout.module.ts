import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import {RouterLink, RouterModule} from '@angular/router';
import { NewUserFormComponent } from './forms/new-user-form/new-user-form.component';
import { trigger, state, style, animate, transition } from '@angular/animations';


@NgModule({
    declarations:[
        LoginFormComponent,
        NewUserFormComponent
    ],
imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    RouterModule
  ],
  exports:[
    LoginFormComponent,
    NewUserFormComponent
  ]
})
export class LayoutModule {}

export const popupAnimation = trigger('popupAnimation', [
  state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
  state('*', style({ opacity: 1, transform: 'scale(1)' })),
  transition(':enter', animate('300ms ease-in')),
  transition(':leave', animate('300ms ease-out')),
]);