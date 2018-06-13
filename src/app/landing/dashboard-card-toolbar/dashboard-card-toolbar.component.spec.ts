import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardToolbarComponent } from './dashboard-card-toolbar.component';

describe('DashboardCardToolbarComponent', () => {
  let component: DashboardCardToolbarComponent;
  let fixture: ComponentFixture<DashboardCardToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
