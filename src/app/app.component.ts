import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers';
import { Logout } from './auth/store/auth.actions';
import { User } from './model/user.model';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut } from './auth/store/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    userIsLoggedIn$:Observable<boolean>;
    userIsLoggedOut$:Observable<boolean>;

    constructor(private store:Store<AppState>,private router:Router) {

    }

    ngOnInit() {
     this.userIsLoggedIn$ =  this.store.select(isLoggedIn);
      this.userIsLoggedOut$ = this.store.select(isLoggedOut);
    }

    logout() {
      this.store.dispatch(new Logout());
    }


}
