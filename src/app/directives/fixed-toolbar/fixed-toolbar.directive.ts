import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appFixedToolbar]'
})
export class FixedToolbarDirective implements AfterViewChecked {

  element: any;
  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;


  }

  ngAfterViewChecked(): void {
    this.element.style.position = 'fixed';
    let width: string = this.element.closest('#appwrap').offsetWidth;
    this.element.style.width = width + 'px';

  }

}
