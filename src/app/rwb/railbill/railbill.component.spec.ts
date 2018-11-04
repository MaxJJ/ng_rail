import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailbillComponent } from './railbill.component';

describe('RailbillComponent', () => {
  let component: RailbillComponent;
  let fixture: ComponentFixture<RailbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
