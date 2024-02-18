import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from 'rxjs';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: LoginService,
    private router: Router
  ) {
  }

 /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.user.value;
    if (currentUser) {
      if(currentUser?.roles.includes(route.data['roles'])) return true;
      else if(currentUser?.roles.includes('ADMIN')) return this.router.createUrlTree(["/users"]);
      else if(currentUser?.roles.includes('MANAGER')) return this.router.createUrlTree(["/echantillons"]);
      else if(currentUser?.roles.includes('TECHNICIAN')) return this.router.createUrlTree(["/patients"]);
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
*/


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.user.value;
    if (currentUser) {
      const requiredRoles = route.data['roles'];
      if (requiredRoles.some(role => currentUser.roles.includes(role))) {
        return true;
      } else if (currentUser.roles.includes('ADMIN')) {
        return this.router.createUrlTree(["/users"]);
      } else if (currentUser.roles.includes('MANAGER')) {
        return this.router.createUrlTree(["/echantillons"]);
      } else if (currentUser.roles.includes('TECHNICIAN')) {
        return this.router.createUrlTree(["/patients"]);
      }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }


  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return  this.authService.user.pipe(take(1),
      map(user=>{
        const isAuth =!!user;
        if(isAuth){
          //if(user?.roles.includes(route.data['role'])) return true;
          const intersectedRoles = user.roles.filter(value => route.data['roles'].includes(value));
          const isAuthorized= intersectedRoles.length? true : false;
          if(isAuthorized)return true;

        }
        return this.router.createUrlTree(["/login"]);
      }))
  }
*/

}
