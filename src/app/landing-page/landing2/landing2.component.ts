import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DowloadModalComponent } from '../dowload-modal/dowload-modal.component';

@Component({
  selector: 'app-landing2',
  standalone: true,
  imports: [RouterLink, CommonModule,MatIconModule],
  templateUrl: './landing2.component.html',
  styleUrl: './landing2.component.scss'
})
export class Landing2Component {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DowloadModalComponent);
  }

}
