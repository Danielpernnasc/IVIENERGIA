import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService)
  if(authService.isAuthenticatedUser()){
    return true;
   
  }else {
    router.navigate(['/login']);
    return false
  }

};
