/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstChartComponent } from './first-chart.component';

describe('FirstChartComponent', () => {
  let component: FirstChartComponent;
  let fixture: ComponentFixture<FirstChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
