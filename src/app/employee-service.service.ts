import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeServiceService {

  constructor() { }
    public employeeDetails = [
  {'name' : 'John', 'Number' : '123'},
  {'name' : 'Andrew', 'Number' : '222'},
  {'name' : 'David', 'Number' : '4444'}
  ];
  showDetails() {
    return this.employeeDetails;
 }
}
