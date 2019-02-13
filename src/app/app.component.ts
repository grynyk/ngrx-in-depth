import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers';
import { Logout } from './auth/store/auth.actions';
import { User } from './model/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    userIsLoggedIn$:Observable<boolean>;
    userIsLoggedOut$:Observable<boolean>;

    constructor(private store:Store<AppState>) {

    }

    ngOnInit() {
     this.userIsLoggedIn$ =  this.store.pipe(
        map(state => state.auth.loggedIn)
      );
      this.userIsLoggedOut$ =  this.store.pipe(
        map(state => !state.auth.loggedIn)
      );
    }

    logout() {
      this.store.dispatch(new Logout())
    }


}
