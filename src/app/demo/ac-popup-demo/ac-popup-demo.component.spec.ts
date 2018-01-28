import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcPopupDemoComponent } from './ac-popup-demo.component';

describe('AcPopupDemoComponent', () => {
  let component: AcPopupDemoComponent;
  let fixture: ComponentFixture<AcPopupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcPopupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcPopupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
