import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MenuService } from '../services/menu/menu.service';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  sideMenu:any[];

  constructor(private breakpointObserver: BreakpointObserver, private menu:MenuService) {}

  ngOnInit() {
   this.menu.side_menu.subscribe(n=>this.sideMenu=n);
  }
}
