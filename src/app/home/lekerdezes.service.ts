import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LekerdezesService {
  private apiUrl = 'https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country='
  private kapottEredmenySubject = new Subject<Observable<any>>();
  isLoading = signal(false)

  constructor(
    private readonly http:HttpClient,
  ){}

  get kapottEredmeny$(): Observable<any> {
    return this.kapottEredmenySubject.asObservable();
  }
  
  search(valasztottOrszag: string) {
  this.isLoading = signal(true)

    const fullApiUrl = `${this.apiUrl}${valasztottOrszag}`;
    const searchResult$ = this.http.get<any>(fullApiUrl);

    this.http.get<any>(fullApiUrl).subscribe((data: any) => {
      this.kapottEredmenySubject.next(searchResult$);
          this.isLoading = signal(false)

    });
  }
}