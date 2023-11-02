import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private color: string = 'blue';

  @Input()
  set appHighlight(valor: string) {
    if (valor) {
      this.color = valor;
    }
  }

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.borderColor = this.color;
    // this.el.nativeElement.style.borderWidth = '5px';
    // this.el.nativeElement.style.borderStyle = 'solid';
    // this.el.nativeElement.style.borderRadius = '5px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.borderColor = this.color;
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
