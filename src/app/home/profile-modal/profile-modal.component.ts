import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card' ;
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatSnackBarModule],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.scss'
})
export class ProfileModalComponent {
  @Input() loggedInUser: string = '';
  snackbar: any;


  constructor(
    private readonly authService:AuthService,
    private readonly router: Router,
    private readonly ref:MatDialogRef<ProfileModalComponent>,
    private readonly snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.authService.loggedInUser$.subscribe(user => {
      this.loggedInUser = user;
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    this.ref.close()
  }
  deleteProfile() {
    const dialogRef = this.snackBar.open('Biztos végleg törlöd a profilt?', 'Megerősítés', {
      duration: 5000
    });
  
    dialogRef.afterDismissed().subscribe((action) => {
      if (action.dismissedByAction) {
        this.authService.deleteProfile();
        this.router.navigate(['']);
        this.ref.close();
      }
    });
  }}