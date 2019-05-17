import { Directive, AfterViewChecked, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFixedBlock]'
})
export class FixedBlockDirective implements AfterViewChecked {

  element: any;

  @Input()
  top: string;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;

  }

  ngAfterViewChecked(): void {
    this.element.style.position = 'fixed';
    let width: string = this.element.closest('#appwrap').offsetWidth;
    this.element.style.width = width + 'px';
    this.element.style.top = this.top + 'px';
  }

}
