import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesummarycontainerComponent } from './changesummarycontainer.component';

describe('ChangesummarycontainerComponent', () => {
  let component: ChangesummarycontainerComponent;
  let fixture: ComponentFixture<ChangesummarycontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesummarycontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesummarycontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
