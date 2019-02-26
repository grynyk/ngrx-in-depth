import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CourseState } from "./courses.reducer";
import * as fromCourse from './courses.reducer'
export const selectCoursesState = createFeatureSelector<CourseState>("courses");

export const selectCourseById = (courseId:number) => createSelector(
    selectCoursesState,
    coursesState => coursesState.entities[courseId]
  );
  
  export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourse.selectAll
  );
  
  export const selectBeginnersCourses = createSelector(
      selectAllCourses,
      courses => courses.filter(course => course.category === 'BEGINNER')
  );
  
  export const selectAdvancedCourses = createSelector(
      selectAllCourses,
      courses => courses.filter(course => course.category === 'ADVANCED')
  );
  
  export const selectPromoTotal = createSelector(
    selectAllCourses,
      courses => courses.filter(course => course.promo).length
  );
  
    export const allCoursesLoaded = createSelector(
    selectCoursesState,
    coursesState => coursesState.entities.allCoursesLoaded
    );