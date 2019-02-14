import { Action } from '@ngrx/store';
import { Course } from '../model/course';

export enum CourseActionTypes {
  CourseRequestedAction = '[Courses] Requested',
  CourseLoadedAction ='[Courses] Loaded',
}

export class CourseRequested implements Action {
  readonly type = CourseActionTypes.CourseRequestedAction;
  constructor(public payload: { courseId:number }) {
  }
}

export class CourseLoaded implements Action {
    readonly type = CourseActionTypes.CourseLoadedAction;
    constructor(public payload: { course:Course }) {
    }
  }

export type CourseActions = CourseRequested | CourseLoaded;
