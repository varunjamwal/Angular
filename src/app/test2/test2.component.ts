import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-test2]',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public text1 = 'Hello';
  public name = 'Varun';
  public myID = 'testID';
  public isDisabled = true;
  public sucessClass = 'text-sucess';
  public specialClass = 'text-special';
  public hasError = true;
  public multiple = this.specialClass + ' ' + this.sucessClass;
  ngOnInit(): void {

  }
public greetUser() {

  return 'Hello '  + this.name.toLowerCase();
}

}
