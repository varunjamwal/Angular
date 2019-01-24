import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceVariableComponentComponent } from './reference-variable-component.component';

describe('ReferenceVariableComponentComponent', () => {
  let component: ReferenceVariableComponentComponent;
  let fixture: ComponentFixture<ReferenceVariableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceVariableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceVariableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
