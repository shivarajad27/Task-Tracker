import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTrackerListComponent } from './task-tracker-list.component';

describe('TaskTrackerListComponent', () => {
  let component: TaskTrackerListComponent;
  let fixture: ComponentFixture<TaskTrackerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTrackerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
