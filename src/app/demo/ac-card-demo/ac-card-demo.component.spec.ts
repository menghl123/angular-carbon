import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCardDemoComponent } from './ac-card-demo.component';

describe('AcCardDemoComponent', () => {
  let component: AcCardDemoComponent;
  let fixture: ComponentFixture<AcCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
