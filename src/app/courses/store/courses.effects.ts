import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CourseActionTypes, CourseRequestedAction, CourseLoadedAction, AllCoursesRequestedAction, AllCoursesLoadedAction } from "./courses.actions";
import { CoursesService } from "../services/courses.service";
import { mergeMap, map, withLatestFrom, filter, catchError } from "rxjs/operators";
import { Course } from "../model/course";
import { select, Store } from '@ngrx/store';
import { allCoursesLoaded } from "./courses.selectors";
import { AppState } from "../../reducers";
import { CourseState } from "./courses.reducer";
import { throwError } from "rxjs";

@Injectable()
export class CourseEffects {

    constructor(private actions$: Actions, private coursesService: CoursesService,
        private store: Store<AppState>) {

    }

    @Effect()
    loadCourse$ = this.actions$.pipe(
        ofType<CourseRequestedAction>(CourseActionTypes.CourseRequested),
        mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
        map(course => new CourseLoadedAction({ course }))
    )

    @Effect()
    loadAllCourses$ = this.actions$
        .pipe(
            ofType<AllCoursesRequestedAction>(CourseActionTypes.AllCoursesRequested),
            withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
            filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
            mergeMap(() => this.coursesService.findAllCourses()),
            map(courses => new AllCoursesLoadedAction({ courses }))
        );

}