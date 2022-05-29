import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  priorities = [1, 2, 3, 4, 5];

  constructor(protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      startDateTime: ['', [Validators.required]],
      endDateTime: ['', [Validators.required]]
    });
  }
}
