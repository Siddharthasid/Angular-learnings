import { createAction, props } from '@ngrx/store';
import { Department } from './department.model';

export const loadDepartment = createAction('[Department] Load Department');
export const loadDepartmentSucccess = createAction(
  '[Department] Load Department Success',
  props<{ departments: Department[] }>()
);
