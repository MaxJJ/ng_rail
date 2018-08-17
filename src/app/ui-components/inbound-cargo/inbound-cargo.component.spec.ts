import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundCargoComponent } from './inbound-cargo.component';

describe('InboundCargoComponent', () => {
  let component: InboundCargoComponent;
  let fixture: ComponentFixture<InboundCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
