import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: ` 
  <ng-template #thenBlock>
  <h2> Valid Condition - Title Displayed </h2>
  </ng-template>
  <h2 *ngIf="displayName; then thenBlock ;  else elseBlock"> Check the ngif </h2>
  <ng-template #elseBlock>
  <h2> Title is Hidden</h2>
  </ng-template>

  `,
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
