import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sideMenu]'
})
export class SideMenuDirective {

  constructor(public sideMenuContainerRef:ViewContainerRef) { }

}
