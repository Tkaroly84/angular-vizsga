import { Component } from '@angular/core';
import { LekerdezesService } from '../../home/lekerdezes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-demo.component.html',
  styleUrl: './list-demo.component.scss'
})
export class ListDemoComponent {
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

}
