import { Action } from '@ngrx/store';
import { Course } from '../model/course';

export enum CourseActionTypes {
  AllCoursesRequested = '[Courses] All Courses Requested',
  AllCoursesLoaded = '[Courses API] All Courses Loaded',
  CourseRequested = '[Courses] Course Requested',
  CourseLoaded ='[Courses API] Course Loaded',
}

export class CourseRequestedAction implements Action {
  readonly type = CourseActionTypes.CourseRequested;
  constructor(public payload: { courseId:number }) {
  }
}

export class CourseLoadedAction implements Action {
    readonly type = CourseActionTypes.CourseLoaded;
    constructor(public payload: { course:Course }) {
    }
  }

  export class AllCoursesRequestedAction implements Action {
    readonly type = CourseActionTypes.AllCoursesRequested;
  }

  export class AllCoursesLoadedAction implements Action {
    readonly type = CourseActionTypes.AllCoursesLoaded;
    constructor(public payload: { courses:Course[] }) {
    }
  }

export type CourseActions = CourseRequestedAction | CourseLoadedAction | AllCoursesRequestedAction | AllCoursesLoadedAction;
