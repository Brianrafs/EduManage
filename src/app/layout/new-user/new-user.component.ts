import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  constructor(private router: Router) { }
  
  navigateToRegisterGuardian(): void {
    this.router.navigate(['/register-guardian']);
  }
  
  navigateToRegisterProfessor(): void {
    this.router.navigate(['/register-professor']);
  }
  
  navigateToRegisterStudent(): void {
    this.router.navigate(['/register-student']);
  }
}
