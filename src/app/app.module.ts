import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuardianModule } from './modules/guardian/guardian.module';
import { HttpClientModule } from '@angular/common/http';
import { FirestoreModule } from './shared/firestore/firestore.module';
import {SnackMenssegerService} from "./shared/services/snack-mensseger.service";
import {IMensseger} from "./shared/model/imensseger";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    GuardianModule,
    HttpClientModule,
    FirestoreModule
  ],
  providers: [{
    provide: IMensseger,
    useExisting: SnackMenssegerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
