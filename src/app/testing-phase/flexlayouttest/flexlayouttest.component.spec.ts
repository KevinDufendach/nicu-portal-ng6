import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlayouttestComponent } from './flexlayouttest.component';

describe('FlexlayouttestComponent', () => {
  let component: FlexlayouttestComponent;
  let fixture: ComponentFixture<FlexlayouttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexlayouttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexlayouttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
