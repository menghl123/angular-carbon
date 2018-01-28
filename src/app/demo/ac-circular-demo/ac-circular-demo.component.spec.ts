import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCircularDemoComponent } from './ac-circular-demo.component';

describe('AcCircularDemoComponent', () => {
  let component: AcCircularDemoComponent;
  let fixture: ComponentFixture<AcCircularDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCircularDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCircularDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
