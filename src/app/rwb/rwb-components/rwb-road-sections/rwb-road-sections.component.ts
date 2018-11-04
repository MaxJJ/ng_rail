import { Component, OnInit, Input } from '@angular/core';
import { Place, RoadSection } from '../../../services/interfaces';

@Component({
  selector: 'rwb-road-sections',
  templateUrl: './rwb-road-sections.component.html',
  styleUrls: ['./rwb-road-sections.component.css']
})
export class RwbRoadSectionsComponent implements OnInit {
  @Input()
  dispatch: Place;
  @Input()
  destination: Place;

  sections: RoadSection[]=[];


  constructor() { }

  ngOnInit() {

    
  }

}
