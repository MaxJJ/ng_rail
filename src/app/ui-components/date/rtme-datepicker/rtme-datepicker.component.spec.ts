import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmeDatepickerComponent } from './rtme-datepicker.component';

describe('RtmeDatepickerComponent', () => {
  let component: RtmeDatepickerComponent;
  let fixture: ComponentFixture<RtmeDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmeDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmeDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
