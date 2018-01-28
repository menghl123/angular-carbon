import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCheckboxDemoComponent } from './ac-checkbox-demo.component';

describe('AcCheckboxDemoComponent', () => {
  let component: AcCheckboxDemoComponent;
  let fixture: ComponentFixture<AcCheckboxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCheckboxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCheckboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
