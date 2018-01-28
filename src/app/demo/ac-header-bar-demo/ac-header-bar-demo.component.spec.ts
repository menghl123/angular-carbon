import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcHeaderBarDemoComponent } from './ac-header-bar-demo.component';

describe('AcHeaderBarDemoComponent', () => {
  let component: AcHeaderBarDemoComponent;
  let fixture: ComponentFixture<AcHeaderBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcHeaderBarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcHeaderBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
