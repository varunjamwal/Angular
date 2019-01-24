import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
  ---------------------------------------------------------------------------------------------
  <h2>ngfor</h2><br>
  <div *ngFor = "let color of colors; index as i">
  <h2 [style.color]="color"> {{i}} {{color}} </h2>
  </div>

  <div *ngFor = "let color of colors; first as f">
  <h2> {{f}} {{color}} </h2>
  </div>

  <div *ngFor = "let color of colors; odd as l">
  <h2> {{l}} {{color}} </h2>
  </div>
  `,
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public colors = ['Red' , 'Blue' , 'Green' , 'Black', 'Pink' ];
  constructor() { }

  ngOnInit() {
  }

}
