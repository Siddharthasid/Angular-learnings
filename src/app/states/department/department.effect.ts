import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DepartmentService } from "src/app/services/department.service";
import { loadDepartment, loadDepartmentSucccess } from "./department.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class DepartmentEffects {
    actions$ = inject(Actions);

    constructor( private departmentService: DepartmentService){}

    loadDepartments$: createEffect(() => 
        this.actions$.pipe(
            ofType(loadDepartment),
            mergeMap(() => 
                this.departmentService.getData().pipe(
                    map((departments: any) => 
                    loadDepartmentSucccess({departments}))
                )
            )
        )
    )
}