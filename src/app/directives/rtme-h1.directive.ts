import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[rtmeH1]'
})
export class RtmeH1Directive {

  constructor(el: ElementRef) {

    el.nativeElement.style.width = "100%";
    el.nativeElement.style.textTransform = "uppercase";
    el.nativeElement.style.display = "block";
    el.nativeElement.style.marginBottom = "0.3em";
    el.nativeElement.style.fontSize = "1em";
    // el.nativeElement.style.color="#153163";
    el.nativeElement.style.lineHeight = "1.8em";
    el.nativeElement.style.borderBottom = "1px solid ";
  }

}
