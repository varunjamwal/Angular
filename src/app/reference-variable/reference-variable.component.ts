import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-variable',
  template: `<p>

  -------------------------------------------------------------------------------------------------------------

  <br> reference-variable-component<br><br>
  <input #myInput type="text" />
  <button (click)="logMessage(myInput.value)"> Log </button>
 
</p>`,
  styleUrls: ['./reference-variable.component.css']
})
export class ReferenceVariableComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  logMessage(value) {
  // tslint:disable-next-line:no-unused-expression
  console.log(value);

}
}
