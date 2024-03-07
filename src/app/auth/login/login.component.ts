import { Component, signal } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Importáld a MatProgressSpinner modult
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  isLoading = signal(false);
  loggedInUser: string = ''; 

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly authService: AuthService,
  ) { }

  login() {

    if (this.authService.login(this.user.username, this.user.password)) {
      this.authService.setLoggedInUser(this.user.username);
    } else {
      this.snackBar.open('Helytelen felhasználónév vagy jelszó!', 'Ok', {
        duration: 5000,
      });
    }

  }
}