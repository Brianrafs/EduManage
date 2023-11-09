import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from 'src/layout/layout.module';
import { LoginFormComponent } from 'src/layout/forms/login-form/login-form.component';
import { NewUserFormComponent } from 'src/layout/forms/new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LoginFormComponent,
        NewUserFormComponent,
        LayoutModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
