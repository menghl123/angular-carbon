import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSearchDemoComponent } from './ac-search-demo.component';

describe('AcSearchDemoComponent', () => {
  let component: AcSearchDemoComponent;
  let fixture: ComponentFixture<AcSearchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcSearchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcSearchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
