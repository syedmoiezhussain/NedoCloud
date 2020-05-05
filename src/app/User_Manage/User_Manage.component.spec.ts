/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { User_ManageComponent } from './User_Manage.component';

describe('User_ManageComponent', () => {
  let component: User_ManageComponent;
  let fixture: ComponentFixture<User_ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User_ManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User_ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
