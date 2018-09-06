import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsAutocompleteComponent } from './units-autocomplete.component';

describe('UnitsAutocompleteComponent', () => {
  let component: UnitsAutocompleteComponent;
  let fixture: ComponentFixture<UnitsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
