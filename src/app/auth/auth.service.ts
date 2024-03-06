import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject = new BehaviorSubject<string>('');

  get loggedInUser$(): Observable<string> {
    return this.loggedInUserSubject.asObservable();
  }

  constructor(private router: Router) { }

  // Ellenőrzi, hogy a felhasználó regisztrált-e
  private isAuthenticated(username: string, password: string): boolean {
    const storedUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
    return storedUsers.some(user => user.username === username && user.password === password);
  }

  // Bejelentkezési folyamat
  login(username: string, password: string): boolean {
    if (this.isAuthenticated(username, password)) {
      this.loggedInUserSubject.next(username);
      // Sikeres bejelentkezés, navigáljunk a főoldalra (vagy a kívánt oldalra)
      this.router.navigate(['/home']); // itt az '/home' helyett a céles oldal útvonalát adjuk meg
      return true;
    } else {
      // Sikertelen bejelentkezés, jelenítsünk meg hibaüzenetet
      console.log('Sikertelen bejelentkezés');
      return false;
    }
  }

  // Felhasználó beállítása
  setLoggedInUser(username: string): void {
    this.loggedInUserSubject.next(username);
  }

  logout(): void {
    this.loggedInUserSubject.next(''); // Bejelentkezett felhasználó törlése
  }

  // Felhasználó profiljának törlése localstorage-ból
  deleteProfile(): void {
    const storedUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
    const updatedUsers = storedUsers.filter(user => user.username !== this.loggedInUserSubject.value);
    localStorage.setItem('allUsers', JSON.stringify(updatedUsers));
    
  }
}
