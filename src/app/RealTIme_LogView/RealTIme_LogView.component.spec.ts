/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealTIme_LogViewComponent } from './RealTIme_LogView.component';

describe('RealTIme_LogViewComponent', () => {
  let component: RealTIme_LogViewComponent;
  let fixture: ComponentFixture<RealTIme_LogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTIme_LogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTIme_LogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
