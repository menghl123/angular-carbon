import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSelectDemoComponent } from './ac-select-demo.component';

describe('AcSelectDemoComponent', () => {
  let component: AcSelectDemoComponent;
  let fixture: ComponentFixture<AcSelectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcSelectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcSelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
