import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDocsComponent } from './inbound-docs.component';

describe('InboundDocsComponent', () => {
  let component: InboundDocsComponent;
  let fixture: ComponentFixture<InboundDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
