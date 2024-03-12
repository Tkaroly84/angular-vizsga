import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject = new BehaviorSubject<string>('');
  bejelentkezettFelhasznalo = signal (false)


  get loggedInUser$(): Observable<string> {
    return this.loggedInUserSubject.asObservable();
  }

  constructor(private router: Router) { }

  private isAuthenticated(username: string, password: string): boolean {
    const storedUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
    return storedUsers.some(user => user.username === username && user.password === password);
  }

  login(username: string, password: string): boolean {
    if (this.isAuthenticated(username, password)) {
      this.loggedInUserSubject.next(username);
      console.log('A bejelentkezett felhasználó:', this.loggedInUserSubject);
      this.bejelentkezettFelhasznalo.set(true);
      this.router.navigate(['/home']);
      return true;
    } else {
      console.log('Sikertelen bejelentkezés');
      this.bejelentkezettFelhasznalo.set(false);
      return false;
    }
  }

  setLoggedInUser(username: string): void {
    this.loggedInUserSubject.next(username);
  }

  logout(): void {
    this.loggedInUserSubject.next('');
  }

  deleteProfile(): void {
    const storedUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
    const updatedUsers = storedUsers.filter(user => user.username !== this.loggedInUserSubject.value);
    localStorage.setItem('allUsers', JSON.stringify(updatedUsers));
    
  }
}
