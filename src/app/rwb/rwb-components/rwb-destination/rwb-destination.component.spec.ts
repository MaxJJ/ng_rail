import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwbDestinationComponent } from './rwb-destination.component';

describe('RwbDestinationComponent', () => {
  let component: RwbDestinationComponent;
  let fixture: ComponentFixture<RwbDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwbDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwbDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
