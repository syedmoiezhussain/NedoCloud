/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Device_ManageComponent } from './Device_Manage.component';

describe('Device_ManageComponent', () => {
  let component: Device_ManageComponent;
  let fixture: ComponentFixture<Device_ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Device_ManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Device_ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
