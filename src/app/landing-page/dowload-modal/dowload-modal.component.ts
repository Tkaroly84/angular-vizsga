import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dowload-modal',
  standalone: true,
  imports: [FormsModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './dowload-modal.component.html',
  styleUrl: './dowload-modal.component.scss'
})
export class DowloadModalComponent {

  title='képek'

  selectedFileType='';
  imageList: string[] = ['1000_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg', 'IMG_4783.JPG', 'IMG_4784.JPG','IMG_4786.JPG','IMG_4787.JPG','letöltés.jpg','login_295128.png','login-picture.jpg','login.png','meglepetes.jpg','symptoms-covid-19.png','Download-Icon.jpg'];
  //docksList:string[]=['Letöltés teszt.txt']
// A docksList most egy olyan tömb, amely objektumokat tartalmaz a name és filename tulajdonságokkal
docksList: { name: string, filename: string }[] = [
  { name: 'Letöltés teszt 1', filename: 'teszt1.txt' },
  { name: 'Letöltés teszt 2', filename: 'teszt2.txt' },
  { name: 'Letöltés teszt 3', filename: 'teszt3.txt' }
];

download() {
  // Használjuk az ngModelt a kiválasztott fájltípus meghatározásához
  const fileType = this.selectedFileType;

  // Ellenőrizzük, hogy a kiválasztott fájltípus 'documents'-e
  if (this.selectedFileType === 'documents') {
      // Készítsünk egy linket a fájlhoz
      const link = document.createElement('a');
      link.href = `assets/documents/${this.docksList[0].filename}`;
      link.download = this.docksList[0].filename;

      // Adjuk hozzá a linket az oldalhoz és indítsuk el a letöltést
      document.body.appendChild(link);
      link.click();

      // Távolítsuk el a linket
      document.body.removeChild(link);
  } else {
      // Egyéb típusokra vonatkozó logika itt...
  }
}
  downloadImage(image: string) {
    // Készítsünk egy linket az adott képhez
    const link = document.createElement('a');
    link.href = `assets/images/${image}`;
    link.download = image;
    
    // Adjuk hozzá a linket az oldalhoz és indítsuk el a letöltést
    document.body.appendChild(link);
    link.click();

    // Távolítsuk el a linket
    document.body.removeChild(link);
  }
}
