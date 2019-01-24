import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
  ------------------------------------------------------------------------------------------------------------------------
  <h2>ngswitch</h2>
  <div [ngSwitch]="color">

  <div *ngSwitchCase = "'red'">You picked red color</div>
  <div *ngSwitchCase = "'blue'">You picked blue color </div>
  <div *ngSwitchCase = "'green'">You Picked green color </div>
  <div *ngSwitchDefault>Not in options </div>
  </div> 
  
  `,
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  public color = 'red';
  constructor() { }

  ngOnInit() {
  }

}
