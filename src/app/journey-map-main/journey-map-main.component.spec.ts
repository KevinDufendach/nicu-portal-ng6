import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyMapMainComponent } from './journey-map-main.component';

describe('JourneyMapMainComponent', () => {
  let component: JourneyMapMainComponent;
  let fixture: ComponentFixture<JourneyMapMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyMapMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyMapMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
