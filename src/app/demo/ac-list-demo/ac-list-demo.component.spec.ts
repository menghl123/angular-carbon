import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListDemoComponent } from './ac-list-demo.component';

describe('AcListDemoComponent', () => {
  let component: AcListDemoComponent;
  let fixture: ComponentFixture<AcListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
