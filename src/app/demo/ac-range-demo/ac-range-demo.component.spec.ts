import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRangeDemoComponent } from './ac-range-demo.component';

describe('AcRangeDemoComponent', () => {
  let component: AcRangeDemoComponent;
  let fixture: ComponentFixture<AcRangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcRangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
