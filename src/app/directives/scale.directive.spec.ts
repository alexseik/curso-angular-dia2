import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScaleDirective } from './scale.directive';
import { Component } from '@angular/core';
import { findEl } from '../utils/testing';

@Component({
  template: `<div appScale data-testid="host"></div>`,
})
class HostComponent {}

describe('ScaleDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let div: HTMLDivElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleDirective, HostComponent],
    });

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    div = findEl(fixture, 'host').nativeElement;
  });

  it('should create an instance', () => {});
});
