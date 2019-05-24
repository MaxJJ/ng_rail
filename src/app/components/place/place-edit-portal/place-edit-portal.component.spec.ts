import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceEditPortalComponent } from './place-edit-portal.component';

describe('PlaceEditPortalComponent', () => {
  let component: PlaceEditPortalComponent;
  let fixture: ComponentFixture<PlaceEditPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceEditPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceEditPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
