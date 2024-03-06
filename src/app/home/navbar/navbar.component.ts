import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NevnapComponent } from '../nevnap/nevnap.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink,NevnapComponent,MatSlideToggleModule,MatIconModule,MatDialogModule, ProfileModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() loggedInUser: string = '';  // Bejelentkezett felhasználó neve
  
  constructor(
    private authService: AuthService,
    private dialog:MatDialog,
  ){
    
  }

  ngOnInit() {
    this.authService.loggedInUser$.subscribe(user => {
      this.loggedInUser = user;
    });
  }


openProfile(){
  this.dialog.open(ProfileModalComponent, {
    width:'fit-content',
    height:'fit-content',
    
  })
}
}
