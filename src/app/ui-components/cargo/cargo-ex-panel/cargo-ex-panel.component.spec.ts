import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoExPanelComponent } from './cargo-ex-panel.component';

describe('CargoExPanelComponent', () => {
  let component: CargoExPanelComponent;
  let fixture: ComponentFixture<CargoExPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoExPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoExPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
