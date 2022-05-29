import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTaskTrackerComponent } from './master-task-tracker.component';

describe('MasterTaskTrackerComponent', () => {
  let component: MasterTaskTrackerComponent;
  let fixture: ComponentFixture<MasterTaskTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTaskTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTaskTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
