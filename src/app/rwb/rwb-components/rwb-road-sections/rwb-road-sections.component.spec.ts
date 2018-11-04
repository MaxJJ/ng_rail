import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwbRoadSectionsComponent } from './rwb-road-sections.component';

describe('RwbRoadSectionsComponent', () => {
  let component: RwbRoadSectionsComponent;
  let fixture: ComponentFixture<RwbRoadSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwbRoadSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwbRoadSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
