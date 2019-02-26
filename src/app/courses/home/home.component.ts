import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CoursesService} from "../services/courses.service";
import { AppState } from '../../reducers';
import { Store, select } from '@ngrx/store';
import { selectAllCourses, selectBeginnersCourses, selectAdvancedCourses, selectPromoTotal } from '../store/courses.selectors';
import { AllCoursesRequestedAction } from '../store/courses.actions';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public promoTotal$: Observable<number>;
   public beginnerCourses$: Observable<Course[]>;
   public advancedCourses$: Observable<Course[]>;

    constructor(private store: Store<AppState>) {
        
    }

    ngOnInit() {

        this.store.dispatch(new AllCoursesRequestedAction());

        this.beginnerCourses$ = this.store.pipe(select(selectBeginnersCourses));
        this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));
        this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

    }

}
