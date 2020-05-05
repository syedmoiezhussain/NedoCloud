/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealTime_Door_Status_ViewComponent } from './Real-Time_Door_Status_View.component';

describe('RealTime_Door_Status_ViewComponent', () => {
  let component: RealTime_Door_Status_ViewComponent;
  let fixture: ComponentFixture<RealTime_Door_Status_ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTime_Door_Status_ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTime_Door_Status_ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
