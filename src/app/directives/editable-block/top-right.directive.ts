import { Directive, ElementRef, AfterViewChecked } from '@angular/core';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[appTopRight]'
})
export class TopRightDirective implements AfterViewChecked {

  el: any;

  constructor(elementRef: ElementRef) {
    this.el = elementRef.nativeElement;

    this.el.style.position = 'absolute';
    this.el.style.top = 0;
    this.el.style.right = 0;
    this.el.style.width = '1em';
    this.el.style.height = '1em';
    this.el.style.margin = '.25em';

  }

  ngAfterViewChecked(): void {
    let btn = this.el.getElementsByClassName('mat-button-wrapper')[0];
    console.log('after view checked ---', btn);
  }
}
