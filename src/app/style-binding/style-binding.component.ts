import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-style-binding]',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  public hasError = true;
  public isSpecial = true;
  public highlightColor = 'blue';

  public theStyle = {
    color: 'green',
    fontSize: '30px'

  };

  constructor() { }

  ngOnInit() {

  }

}
