import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTabDemoComponent } from './ac-tab-demo.component';

describe('AcTabDemoComponent', () => {
  let component: AcTabDemoComponent;
  let fixture: ComponentFixture<AcTabDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcTabDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcTabDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
