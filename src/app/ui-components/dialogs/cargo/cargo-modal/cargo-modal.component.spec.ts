import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoModalComponent } from './cargo-modal.component';

describe('CargoModalComponent', () => {
  let component: CargoModalComponent;
  let fixture: ComponentFixture<CargoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
