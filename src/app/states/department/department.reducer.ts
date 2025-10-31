import { createReducer, on } from '@ngrx/store';
import { Department } from './department.model';
import { loadDepartment, loadDepartmentSucccess } from './department.actions';

export interface DepartmentState {
  departments: Department[];
  loading: boolean;
}

export const initialDepartmentState: DepartmentState = {
  departments: [],
  loading: false,
};

export const departmentReducer = createReducer(
  initialDepartmentState,
  on(loadDepartment, (state) => ({ ...state, loading: true })),
  on(loadDepartmentSucccess, (state, { departments }) => ({
    ...state,
    departments,
    loading: false,
  }))
);
