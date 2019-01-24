import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styles:[ `
  div{
    color : coral;
    font-size : 100px;
  }
  `]
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
