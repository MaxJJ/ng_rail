import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRawComponent } from './place-raw.component';

describe('PlaceRawComponent', () => {
  let component: PlaceRawComponent;
  let fixture: ComponentFixture<PlaceRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
