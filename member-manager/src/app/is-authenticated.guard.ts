import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable, tap } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  let loggedIn = false;
  console.log('isAuthenticatedGuard', route, state);

  // synchronously read the current value of the observable.
  authService.isLoggedIn$.pipe(
    tap((isLoggedIn: boolean) => loggedIn = isLoggedIn),
  ).subscribe();

  if (!loggedIn) {
    router.navigate(['login']);
  }

  return loggedIn;
  
};


/*
export class IsAuthenticatedGuard implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log("canActivate??")
    return true;
  }
}
*/

/*
export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);

  console.log("isAuthenticated???");

  authService.isLoggedIn$.pipe(tap(isLoggedIn => {

    return isLoggedIn;
  }));

  
};
*/