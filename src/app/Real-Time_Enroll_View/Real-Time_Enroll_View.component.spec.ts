/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealTime_Enroll_ViewComponent } from './Real-Time_Enroll_View.component';

describe('RealTime_Enroll_ViewComponent', () => {
  let component: RealTime_Enroll_ViewComponent;
  let fixture: ComponentFixture<RealTime_Enroll_ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTime_Enroll_ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTime_Enroll_ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
