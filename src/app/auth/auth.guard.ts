import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from './store/auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean>{

        return this.store.pipe(
            select(isLoggedIn),
            tap(isLoggedIn => {
                if(!isLoggedIn){
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }

}