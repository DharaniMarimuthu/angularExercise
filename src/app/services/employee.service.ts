import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees=[{"employeeId":101,"employeeName":"Dharani","employeeAddress":"Coimbatore","salary":41000},
  {"employeeId":102,"employeeName":"Gokul","employeeAddress":"Chennai","salary":55000},
  {"employeeId":103,"employeeName":"Dhaanya","employeeAddress":"Bangalore","salary":35000},
  {"employeeId":104,"employeeName":"Modheeswaran","employeeAddress":"Erode","salary":30000},
  {"employeeId":105,"employeeName":"Revathi","employeeAddress":"Kolkata","salary":50000}]
  constructor() { }
  getAllEmployees(){
    return this.employees;
  }
}
