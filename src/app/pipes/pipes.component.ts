import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase }} </h2>
  <h2>{{name | titlecase }} </h2>
  <h2>{{name | slice:5:14 | uppercase }} </h2>
  <h2>{{person}} </h2>
  <h2>{{person | json}} </h2>
  <h2> {{5.123 | number:'3.4-5'}}</h2>
  <h2> {{5.123 | number:'4.1-2'}}</h2>
  <h2> {{ 0.40 | percent}}</h2>
  <h2> {{1200 | currency:'INR'}}</h2>
  <h2> {{date | date:'medium'}} </h2>
  <h2> {{date | date:'shortDate '}} </h2>
  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = 'Demo to illustrate pipes';
  public message = 'this example shows how title case works';

  public person = {
    'firstName' : 'Varun',
    'lastname'  : 'Jamwal'
  };

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
