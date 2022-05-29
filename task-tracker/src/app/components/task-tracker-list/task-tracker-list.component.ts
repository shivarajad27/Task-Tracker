import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-tracker-list',
  templateUrl: './task-tracker-list.component.html',
  styleUrls: ['./task-tracker-list.component.scss']
})
export class TaskTrackerListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
