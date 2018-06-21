import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsmainComponent } from './chartsmain.component';

describe('ChartsmainComponent', () => {
  let component: ChartsmainComponent;
  let fixture: ComponentFixture<ChartsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
