import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaViewSideMenuComponent } from './factura-view-side-menu.component';

describe('FacturaViewSideMenuComponent', () => {
  let component: FacturaViewSideMenuComponent;
  let fixture: ComponentFixture<FacturaViewSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaViewSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaViewSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
