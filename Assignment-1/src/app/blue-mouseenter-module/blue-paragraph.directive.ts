import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueParagraph]'
})
export class BlueParagraphDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
