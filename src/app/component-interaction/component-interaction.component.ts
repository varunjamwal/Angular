import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
  <h2> {{"hello " + parentData + " wassup" }} <h2>
  <button (click) = "fireEvent()"> End to Parent </button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    // tslint:disable-next-line:quotemark
    this.childEvent.emit("Hi from Child Component");
  }

}
