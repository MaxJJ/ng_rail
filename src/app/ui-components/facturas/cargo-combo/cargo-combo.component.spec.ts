import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoComboComponent } from './cargo-combo.component';

describe('CargoComboComponent', () => {
  let component: CargoComboComponent;
  let fixture: ComponentFixture<CargoComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
