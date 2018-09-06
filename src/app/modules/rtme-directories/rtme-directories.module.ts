import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsAutocompleteComponent } from './components/units-autocomplete/units-autocomplete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DirectoriesService } from '../../services/backend/directories/directories.service';
import { PackageAutocompleteComponent } from './components/package-autocomplete/package-autocomplete.component';
@NgModule({
  imports: [
    CommonModule,
    
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,

  ],
  exports:[
    UnitsAutocompleteComponent,PackageAutocompleteComponent,
  ],
  providers:[
    DirectoriesService,
  ],
  declarations: [UnitsAutocompleteComponent, PackageAutocompleteComponent]
})
export class RtmeDirectoriesModule { }
