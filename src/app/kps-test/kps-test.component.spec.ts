import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpsTestComponent } from './kps-test.component';

describe('KpsTestComponent', () => {
  let component: KpsTestComponent;
  let fixture: ComponentFixture<KpsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
