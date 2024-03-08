import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DemoLekerdezesComponent } from '../../landing-page/demo-lekerdezes/demo-lekerdezes.component';
import { ListDemoComponent } from '../../landing-page/list-demo/list-demo.component';





@Component({
  selector: 'app-landing2',
  standalone: true,
  imports: [RouterLink, CommonModule,MatIconModule ,DemoLekerdezesComponent, ListDemoComponent,],
  templateUrl: './landing2.component.html',
  styleUrl: './landing2.component.scss'
})
export class Landing2Component {

  constructor() {}

}
