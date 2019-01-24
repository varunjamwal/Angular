import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  employeeDetails;
  public name = 'Varun';
  constructor() {

  }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {

   }
}
