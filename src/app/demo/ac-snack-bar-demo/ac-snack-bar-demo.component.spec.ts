import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSnackBarDemoComponent } from './ac-snack-bar-demo.component';

describe('AcSnackBarDemoComponent', () => {
  let component: AcSnackBarDemoComponent;
  let fixture: ComponentFixture<AcSnackBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcSnackBarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcSnackBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
