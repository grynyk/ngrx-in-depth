


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import { AppState } from "../../reducers";
import { Store, select } from "@ngrx/store";
import { selectCourseById } from "../store/courses.selectors";
import { tap, filter, first } from "rxjs/operators";
import { CourseRequestedAction } from "../store/courses.actions";



@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private coursesService:CoursesService,private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        const courseId = route.params['id'];
       return this.store.pipe(
           select(selectCourseById(courseId)),
           tap(course =>{
            if(!course){
                this.store.dispatch(new CourseRequestedAction({courseId}));
            }
           }),
           filter(course => !!course),
           first()
       )
    }

}

