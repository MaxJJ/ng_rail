import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmePrintComponent } from './rtme-print.component';

describe('RtmePrintComponent', () => {
  let component: RtmePrintComponent;
  let fixture: ComponentFixture<RtmePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
