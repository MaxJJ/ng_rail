import { Component} from '@angular/core';
import { Observable } from 'rxjs';

import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver){
 
  }


ngOnInit() {

}


}
