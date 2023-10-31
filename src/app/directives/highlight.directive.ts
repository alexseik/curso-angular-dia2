import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderColor = 'blue';
    this.el.nativeElement.style.borderWidth = '5px';
    this.el.nativeElement.style.borderStyle = 'solid';
    this.el.nativeElement.style.borderRadius = '5px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.borderColor = 'blue';
    this.el.nativeElement.style.borderWidth = '5px';
    this.el.nativeElement.style.borderStyle = 'solid';
    this.el.nativeElement.style.borderRadius = '5px';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.borderColor = '';
    this.el.nativeElement.style.borderWidth = '';
    this.el.nativeElement.style.borderStyle = '';
    this.el.nativeElement.style.borderRadius = '';
    this.el.nativeElement.style.cursor = '';
  }
}
