import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRadioDemoComponent } from './ac-radio-demo.component';

describe('AcRadioDemoComponent', () => {
  let component: AcRadioDemoComponent;
  let fixture: ComponentFixture<AcRadioDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcRadioDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcRadioDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
