import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSearchDialogComponent } from './person-search-dialog.component';

describe('PersonSearchDialogComponent', () => {
  let component: PersonSearchDialogComponent;
  let fixture: ComponentFixture<PersonSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
