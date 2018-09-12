import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPersonComponent } from './factura-person.component';

describe('FacturaPersonComponent', () => {
  let component: FacturaPersonComponent;
  let fixture: ComponentFixture<FacturaPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
