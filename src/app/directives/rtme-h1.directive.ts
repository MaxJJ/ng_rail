import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[rtmeH1]'
})
export class RtmeH1Directive {

  constructor(el: ElementRef) {
    
    el.nativeElement.style.width="100%";
    el.nativeElement.style.color="#153163";
    el.nativeElement.style.lineHeight="24px";
    el.nativeElement.style.borderBottom = "1px solid grey";
  }

}
