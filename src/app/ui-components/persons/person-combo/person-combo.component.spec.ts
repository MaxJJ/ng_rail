import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComboComponent } from './person-combo.component';

describe('PersonComboComponent', () => {
  let component: PersonComboComponent;
  let fixture: ComponentFixture<PersonComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
