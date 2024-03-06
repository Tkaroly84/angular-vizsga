import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nevnap',
  standalone: true,
  imports: [ReactiveFormsModule, MatProgressSpinner, MatIconModule, RouterLink, MatDatepickerModule, MatFormFieldModule, MatInputModule, NavbarComponent, MatButtonModule, MatCardModule, HttpClientModule, CommonModule],
  templateUrl: './nevnap.component.html',
  styleUrls: ['./nevnap.component.scss'],
  providers: [DatePipe, provideNativeDateAdapter()]
})
export class NevnapComponent implements OnInit {

  @Input() showInNavbar = false;  // Változó, amely meghatározza, hogy látszik-e a navbar-ban

  nameDays: string[] = [];
  selectedDate: string = '';
  searchDateName: string = '';
  kikeresettnevnapok: string = ''



  newSearch = new FormGroup({
    searchDate: new FormControl<string>(''),
    searchName: new FormControl<string>(''),
  })


  constructor(private http: HttpClient,
    private datePipe: DatePipe,
    private readonly snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const dateToCheck = this.datePipe.transform(currentDate, 'MM-dd');

    if (dateToCheck) {
      const apiUrl = `https://api.nevnapok.eu/nap/${dateToCheck}`;

      this.http.get<any>(apiUrl).subscribe(
        data => {
          // Csak az első két nevet tároljuk el a nameDays tömbben
          const selectedNameDays = data[dateToCheck].slice(0, 2);

          // Összeállítjuk a stringet a névnapokból
          this.nameDays = selectedNameDays.join(', ');
        },
        error => {
          console.error('Hiba történt az API lekérdezése során:', error);
        }
      );
    } else {
      console.error('Hiba történt a dátum formázása során.');
    }
  }
  searchDate(): void {
    const searchDate = this.newSearch.value.searchDate;

    // Átalakítjuk a dátumot az API által elvárt formátumra (MM-dd)
    const formattedDate = this.datePipe.transform(searchDate, 'MM-dd');
    console.log('formázott dátum:', formattedDate)

    if (formattedDate) {
      const apiUrl = `https://api.nevnapok.eu/nap/${formattedDate}`;

      this.http.get<any>(apiUrl).subscribe(
        data => {
          // Ellenőrizzük, hogy az adatstruktúra tartalmazza-e a várt információkat
          if (data && data[formattedDate]) {
            const selectedNameDays = data[formattedDate];
            this.searchDateName = selectedNameDays.join(', ');
            this.newSearch.reset();
          } else {
            console.error('Hibás API válasz:', data);
          }
        },
        error => {
          console.error('Hiba történt az API lekérdezése során:', error);
        }
      );
    } else {
      console.error('Hiba történt a dátum formázása során.');
    }
  }

  searchName(): void {
    const searchName = this.newSearch.value.searchName;
    console.log('A keresett név:', searchName);
    if (searchName) {
      const apiUrlSearchName = `https://api.nevnapok.eu/nev/${searchName}`;

      this.http.get<any>(apiUrlSearchName).subscribe(
        data => {
          console.log('API válasz:', data); // Minden API választ kiírunk, beleértve az üres választ is

          // Ellenőrizzük, hogy az adatstruktúra tartalmazza-e a várt információkat
          if (data && data[searchName]) {
            const nameDayDate = data[searchName];
            this.kikeresettnevnapok = nameDayDate.join(', ');
            console.log('Keresett név:', searchName)
            console.log('A megtalált dátum(ok):', data);
            this.newSearch.reset();
          }
          else {
            console.error('Hibás vagy üres API válasz:', data);
            this.snackbar.open('Nem találtunk ilyen nevet', 'Ok')
            this.newSearch.reset();
          }
        },
        error => {
          console.error('Hiba történt az API lekérdezése során:', error);
        }
      );
    }
  }

  newSearchNull() {
    this.newSearch.reset();
  }
}