import { Injectable } from '@angular/core';
import {IMensseger} from "../model/imensseger";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackMenssegerService extends IMensseger{
  constructor(private snackBar: MatSnackBar) {
    super();
  }

  success(menssage: string): void {
    this.openSnackBar(menssage, ['success']);
  }

  error(menssage: string): void {
    this.openSnackBar(menssage, ['error']);
  }

  info(menssage: string): void {
    this.openSnackBar(menssage, ['info']);
  }

  alert(menssage: string): void {
    this.openSnackBar(menssage, ['warning']);
  }

  private openSnackBar(menssage: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = extraClasses;
    this.snackBar.open(menssage, 'Fechar', config);
  }

}
