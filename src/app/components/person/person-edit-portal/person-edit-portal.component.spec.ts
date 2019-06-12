import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditPortal } from './person-edit-portal.component';

describe('PersonDialogComponent', () => {
  let component: PersonEditPortal;
  let fixture: ComponentFixture<PersonEditPortal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonEditPortal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
