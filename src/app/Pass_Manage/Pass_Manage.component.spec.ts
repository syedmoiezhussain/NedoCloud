/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pass_ManageComponent } from './Pass_Manage.component';

describe('Pass_ManageComponent', () => {
  let component: Pass_ManageComponent;
  let fixture: ComponentFixture<Pass_ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass_ManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pass_ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
