import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LekerdezesService } from '../lekerdezes.service';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule,MatSlideToggleModule, CommonModule,MatButtonModule,MatButton],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  a: any[] = [];
  constructor(
    private readonly lekerdezesService:LekerdezesService
  ){}

  ngOnInit(){
    this.lekerdezesService.kapottEredmeny$.subscribe(searchResult$ =>{
      searchResult$.subscribe((data: any) => {
        this.a.push(data);      });
    });
  }
  showDetails(result: any) {
    result.showDetails = true;
  }

  dontShowDetails(result: any) {
    result.showDetails = false;
  }
}