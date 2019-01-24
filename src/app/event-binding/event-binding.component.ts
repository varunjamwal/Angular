import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-event-binding',
  template: `<button (click)='onClickMe()'>Click me!</button>
          <h2 class="clickMsg">{{clickMessage}}</h2>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public clickMessage;
  onClickMe() {
    this.clickMessage = 'Hello Dude Event Binding works';
    console.log('Yo dude');
    alert('what ????');
  }
  constructor() { }

  ngOnInit() {
  }

}

