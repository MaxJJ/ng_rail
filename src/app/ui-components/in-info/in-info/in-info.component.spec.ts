import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InInfoComponent } from './in-info.component';

describe('InInfoComponent', () => {
  let component: InInfoComponent;
  let fixture: ComponentFixture<InInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
