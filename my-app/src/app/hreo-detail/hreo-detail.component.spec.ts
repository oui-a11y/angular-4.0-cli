import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HreoDetailComponent } from './hreo-detail.component';

describe('HreoDetailComponent', () => {
  let component: HreoDetailComponent;
  let fixture: ComponentFixture<HreoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HreoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HreoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
