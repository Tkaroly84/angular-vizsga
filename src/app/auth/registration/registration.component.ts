import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatSnackBarModule, ReactiveFormsModule, MatProgressSpinner, MatSnackBarModule, RouterLink, MatButtonModule, MatCardModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  newUser = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
    username: new FormControl<string>('', [Validators.required]),
    passwordCheck: new FormControl<string | null>('', [Validators.required]),
  })



  isLoading = signal(false)


  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) { }

  registration() {
    this.isLoading.set(true);
  
    if (this.newUser.value.password !== this.newUser.value.passwordCheck) {
      this.snackBar.open('Nem egyeznek a jelszó mezők!', 'Ok');
      this.router.navigate(['/registration']);
      this.isLoading.set(false);
      return;
    }else{
    const storedUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');

  const isEmailRegistered = storedUsers.some(user => user.email === this.newUser.value.email);

  if (isEmailRegistered) {
    this.snackBar.open('Ez az e-mail cím már regisztrált!', 'Ok');
    this.router.navigate(['/registration']);
    this.isLoading.set(false);
    return;
  }
  
    const newUser = {
      username: this.newUser.value.username,
      email: this.newUser.value.email,
      password: this.newUser.value.password
    };
  
    storedUsers.push(newUser);
  
    this.saveAllUsers(storedUsers);
  
    finalize(() => this.isLoading.set(false));
    console.log(this.newUser.value),
      this.router.navigate(['/login']);
  }
    }
  
  saveAllUsers(storedUsers: any[]): void {
    localStorage.setItem('allUsers', JSON.stringify(storedUsers));
  }
  
    }
