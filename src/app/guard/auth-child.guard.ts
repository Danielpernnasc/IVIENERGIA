import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
 
 const router = inject(Router);
 const authService = inject(AuthenticationService)

 if(authService.isAuthenticatedUser()){
   console.log(childRoute, 'chidROutes O q traz');
   console.log(state);
   return true;
 }else {
   router.navigate(['/login']);
   return false;
 }
};
