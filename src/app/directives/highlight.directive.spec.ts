import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { findEl } from '../utils/testing';

@Component({
  template: `<div appHighlight data-testid="host"></div>`,
})
class HostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let div: HTMLDivElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, HostComponent],
    });
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    div = findEl(fixture, 'host').nativeElement;
  });

  it('should set the border initially', () => {
    expect(div.style['borderColor']).toBe('blue');
  });
});
