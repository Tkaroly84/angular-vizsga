import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { LekerdezesService } from '../../home/lekerdezes.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-demo-lekerdezes',
  standalone: true,
  imports: [MatProgressSpinner, MatTabsModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './demo-lekerdezes.component.html',
  styleUrl: './demo-lekerdezes.component.scss'
})
export class DemoLekerdezesComponent {

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
    protected readonly lekerdezesService: LekerdezesService
  ) { }

  search() {
    
    const valasztottOrszag = this.newSearch.get('country')?.value ?? '';
    this.lekerdezesService.search(valasztottOrszag);
    
    this.newSearch.reset()
  }


}
