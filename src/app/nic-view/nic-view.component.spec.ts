import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicViewComponent } from './nic-view.component';

describe('NicViewComponent', () => {
  let component: NicViewComponent;
  let fixture: ComponentFixture<NicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
