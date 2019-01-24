import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService} from '.././employee-service.service';
@Component({
  selector: 'app-services',
  template: `
  <h1> Welcome <br><br></h1>
  <h2>Employee List </h2>

  <div *ngFor = "let emp of employeeList; index as i;">
  <h2> {{i+1 + "."}} {{"Name - " }}{{emp.name}} <br> {{"Number - " + emp.Number}} </h2>
  </div>


  `,
  styleUrls: ['./services.component.css'],
  providers : [EmployeeServiceService]
})
export class ServicesComponent implements OnInit {

  public employeeList = [];

  constructor(private myservice: EmployeeServiceService) { }

  ngOnInit() {
   this.employeeList = this.myservice.showDetails();
}
}
