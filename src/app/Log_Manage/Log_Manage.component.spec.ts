/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Log_ManageComponent } from './Log_Manage.component';

describe('Log_ManageComponent', () => {
  let component: Log_ManageComponent;
  let fixture: ComponentFixture<Log_ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Log_ManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Log_ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
