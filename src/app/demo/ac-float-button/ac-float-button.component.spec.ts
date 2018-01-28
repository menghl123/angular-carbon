import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcFloatButtonDemoComponent } from './ac-float-button.component';

describe('AcFloatButtonDemoComponent', () => {
  let component: AcFloatButtonDemoComponent;
  let fixture: ComponentFixture<AcFloatButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcFloatButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcFloatButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
