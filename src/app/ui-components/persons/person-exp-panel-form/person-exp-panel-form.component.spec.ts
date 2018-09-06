import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonExpPanelFormComponent } from './person-exp-panel-form.component';

describe('PersonExpPanelFormComponent', () => {
  let component: PersonExpPanelFormComponent;
  let fixture: ComponentFixture<PersonExpPanelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonExpPanelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonExpPanelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
