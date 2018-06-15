import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyMapDetailsComponent } from './journey-map-details.component';

describe('JourneyMapDetailsComponent', () => {
  let component: JourneyMapDetailsComponent;
  let fixture: ComponentFixture<JourneyMapDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyMapDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
