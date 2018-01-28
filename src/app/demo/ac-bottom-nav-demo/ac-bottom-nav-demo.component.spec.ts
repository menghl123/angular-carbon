import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcBottomNavDemoComponent } from './ac-bottom-nav-demo.component';

describe('AcBottomNavDemoComponent', () => {
  let component: AcBottomNavDemoComponent;
  let fixture: ComponentFixture<AcBottomNavDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcBottomNavDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcBottomNavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
