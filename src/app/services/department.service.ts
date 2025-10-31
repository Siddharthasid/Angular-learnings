import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getDepartment() {
    return this.http.get(
      'https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments'
    );
  }
}
