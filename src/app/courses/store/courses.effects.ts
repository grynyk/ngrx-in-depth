import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CourseActionTypes, CourseRequested, CourseLoaded } from "./courses.actions";
import { CoursesService } from "../services/courses.service";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class CourseEffects{

    constructor(private actions$:Actions, private coursesService:CoursesService){

    }

@Effect()
    loadCourse$ = this.actions$.pipe(
        ofType<CourseRequested>(CourseActionTypes.CourseRequestedAction),
        mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
        map(course => new CourseLoaded({course}))
    )

}