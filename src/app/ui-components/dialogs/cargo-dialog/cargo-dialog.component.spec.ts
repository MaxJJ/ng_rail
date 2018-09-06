import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDialogComponent } from './cargo-dialog.component';

describe('CargoDialogComponent', () => {
  let component: CargoDialogComponent;
  let fixture: ComponentFixture<CargoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
