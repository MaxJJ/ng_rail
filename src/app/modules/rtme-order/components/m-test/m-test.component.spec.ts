import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTestComponent } from './m-test.component';

describe('MTestComponent', () => {
  let component: MTestComponent;
  let fixture: ComponentFixture<MTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
