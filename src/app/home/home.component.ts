import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LekerdezesComponent } from './lekerdezes/lekerdezes.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LekerdezesComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
