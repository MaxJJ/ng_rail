import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpsFindStationComponent } from './kps-find-station.component';

describe('KpsFindStationComponent', () => {
  let component: KpsFindStationComponent;
  let fixture: ComponentFixture<KpsFindStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpsFindStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpsFindStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
