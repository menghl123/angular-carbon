import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcModalDemoComponent } from './ac-modal-demo.component';

describe('AcModalDemoComponent', () => {
  let component: AcModalDemoComponent;
  let fixture: ComponentFixture<AcModalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcModalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
