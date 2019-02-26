import { Action } from '@ngrx/store';
import { Course } from '../model/course';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CourseActions, CourseActionTypes } from './courses.actions';


export interface CourseState extends EntityState<Course> {
  allCoursesLoaded: Boolean;
}

export const courseAdapter: EntityAdapter<Course> = createEntityAdapter<Course>();
export const initialCoursesState: CourseState = courseAdapter.getInitialState({
  allCoursesLoaded: false
});

export function CoursesReducer(state = initialCoursesState, action: CourseActions): CourseState {
  switch (action.type) {
    case CourseActionTypes.CourseLoaded:
      return courseAdapter.addOne(action.payload.course, state);
    case CourseActionTypes.AllCoursesLoaded:
      return courseAdapter.addAll(action.payload.courses, { ...state, allCoursesLoaded: true });
    default:
      return state;
  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = courseAdapter.getSelectors();