import { Action } from '@ngrx/store';
import { Course } from '../model/course';
import { EntityState, EntityAdapter,createEntityAdapter } from '@ngrx/entity';
import { CourseActions, CourseActionTypes } from './courses.actions';


export interface CoursesState extends EntityState<Course> {
 
}

export const courseAdapter: EntityAdapter<Course> = createEntityAdapter<Course>();
export const initialCoursesState: CoursesState = courseAdapter.getInitialState();

export function CoursesReducer(state = initialCoursesState, action: CourseActions): CoursesState {
  switch(action.type){
    case CourseActionTypes.CourseLoadedAction:
        return courseAdapter.addOne(action.payload.course,state);
        // case CourseActionTypes.CourseRequestedAction:
        // return courseAdapter.addOne(action.payload.course,state);
    default:
      return state;
  }
}
