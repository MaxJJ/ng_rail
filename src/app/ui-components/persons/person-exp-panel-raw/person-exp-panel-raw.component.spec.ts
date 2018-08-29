import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonExpPanelRawComponent } from './person-exp-panel-raw.component';

describe('PersonExpPanelRawComponent', () => {
  let component: PersonExpPanelRawComponent;
  let fixture: ComponentFixture<PersonExpPanelRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonExpPanelRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonExpPanelRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
