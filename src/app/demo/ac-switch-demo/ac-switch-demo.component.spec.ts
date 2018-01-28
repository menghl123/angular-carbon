import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSwitchDemoComponent } from './ac-switch-demo.component';

describe('AcSwitchDemoComponent', () => {
  let component: AcSwitchDemoComponent;
  let fixture: ComponentFixture<AcSwitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcSwitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
