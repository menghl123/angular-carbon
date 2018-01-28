import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcToastDemoComponent } from './ac-toast-demo.component';

describe('AcToastDemoComponent', () => {
  let component: AcToastDemoComponent;
  let fixture: ComponentFixture<AcToastDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcToastDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcToastDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
