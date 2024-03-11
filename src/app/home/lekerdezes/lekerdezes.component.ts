import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Country } from '../../models/country.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LekerdezesService } from '../lekerdezes.service';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DowloadModalComponent } from './dowload-modal/dowload-modal.component';

@Component({
  selector: 'app-lekerdezes',
  standalone: true,
  imports: [MatProgressSpinner, MatTabsModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './lekerdezes.component.html',
  styleUrl: './lekerdezes.component.scss',
})
export class LekerdezesComponent {

  countries: Country[] = [
    { value: 'Hungary', viewValue: 'Magyarország' },
    { value: 'France', viewValue: 'Franciaország' },
    { value: 'Slovakia', viewValue: 'Szlovákia' },
    { value: 'Slovenia', viewValue: 'Szlovénia' },
    { value: 'Austria', viewValue: 'Ausztria' },
    { value: 'Romania', viewValue: 'Románia' },
  ];

  newSearch = new FormGroup({
    country: new FormControl<string>('', [Validators.required]),
  })

  constructor(
    protected readonly lekerdezesService: LekerdezesService,
    public dialog: MatDialog
  ) { }


  search() {
    
    const valasztottOrszag = this.newSearch.get('country')?.value ?? '';
    this.lekerdezesService.search(valasztottOrszag);
    
    this.newSearch.reset()
  }

  openDialog() {
    this.dialog.open(DowloadModalComponent);
  }
}