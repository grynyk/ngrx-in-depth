import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CourseActionTypes, CourseRequestedAction, CourseLoadedAction, AllCoursesRequestedAction, AllCoursesLoadedAction } from "./courses.actions";
import { CoursesService } from "../services/courses.service";
import { mergeMap, map } from "rxjs/operators";
import { Course } from "../model/course";

@Injectable()
export class CourseEffects{

    constructor(private actions$:Actions, private coursesService:CoursesService){

    }

@Effect()
    loadCourse$ = this.actions$.pipe(
        ofType<CourseRequestedAction>(CourseActionTypes.CourseRequested),
        mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
        map(course => new CourseLoadedAction({course}))
    )

    // @Effect()
    // loadAllCourses$ = this.actions$.pipe(
    //     ofType<AllCoursesRequestedAction>(CourseActionTypes.CourseRequested),
    //     mergeMap((action:Course[]) => this.coursesService.findAllCourses()),
    //     map(course => new AllCoursesLoadedAction((action:Course[])))
    // )

}