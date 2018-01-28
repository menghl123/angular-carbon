import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFreshDemoComponent } from './ac-fresh-demo.component';

describe('AcFreshDemoComponent', () => {
  let component: AcFreshDemoComponent;
  let fixture: ComponentFixture<AcFreshDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcFreshDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFreshDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
