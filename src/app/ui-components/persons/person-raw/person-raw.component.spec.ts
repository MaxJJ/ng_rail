import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRawComponent } from './person-raw.component';

describe('PersonRawComponent', () => {
  let component: PersonRawComponent;
  let fixture: ComponentFixture<PersonRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
