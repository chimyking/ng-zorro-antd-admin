/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObserableComponent } from './obserable.component';

describe('ObserableComponent', () => {
  let component: ObserableComponent;
  let fixture: ComponentFixture<ObserableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
