import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  
  const authService = inject (AuthService);

  return authService.bejelentkezettFelhasznalo();
};
