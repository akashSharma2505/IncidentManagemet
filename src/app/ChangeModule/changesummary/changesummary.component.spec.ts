import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesummaryComponent } from './changesummary.component';

describe('ChangesummaryComponent', () => {
  let component: ChangesummaryComponent;
  let fixture: ComponentFixture<ChangesummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
