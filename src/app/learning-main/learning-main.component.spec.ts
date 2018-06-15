import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMainComponent } from './learning-main.component';

describe('LearningMainComponent', () => {
  let component: LearningMainComponent;
  let fixture: ComponentFixture<LearningMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
