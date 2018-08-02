import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRailComponent } from './right-rail.component';

describe('RightRailComponent', () => {
  let component: RightRailComponent;
  let fixture: ComponentFixture<RightRailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightRailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
