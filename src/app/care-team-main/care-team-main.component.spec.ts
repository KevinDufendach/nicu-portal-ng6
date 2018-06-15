import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTeamMainComponent } from './care-team-main.component';

describe('CareTeamMainComponent', () => {
  let component: CareTeamMainComponent;
  let fixture: ComponentFixture<CareTeamMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareTeamMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTeamMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
