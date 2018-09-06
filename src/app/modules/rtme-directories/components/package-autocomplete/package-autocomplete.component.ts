import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Package } from '../../../../services/interfaces';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DirectoriesService } from '../../../../services/backend/directories/directories.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'package-autocomplete',
  templateUrl: './package-autocomplete.component.html',
  styleUrls: ['./package-autocomplete.component.css']
})
export class PackageAutocompleteComponent implements OnInit {
  @Input()
  value:Package;
  packs:Observable<Package[]>;
  fc:FormControl=new FormControl('');
  
  @Output()
  valueChange:EventEmitter<Package> = new EventEmitter<Package>()
  
    constructor(private service:DirectoriesService) { }
  
    ngOnInit() {
      if(!isNullOrUndefined(this.value)){
        this.fc.setValue(this.value.print_name);
      }
      
      this.fc.valueChanges.subscribe(v=>{
        this.searchPackage(v);});
    }
  
  searchPackage(qry:string){
  
   this.packs= this.service.searchPackage(qry);
  }
  
  selectionHandler(ev){
    let pck = ev.option.value;
    this.fc.setValue(pck.print_name);
    this.valueChange.emit(pck);
  
  }
  
  }
