import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Task } from "src/app/models/task.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-task-tracker-list",
  templateUrl: "./task-tracker-list.component.html",
  styleUrls: ["./task-tracker-list.component.scss"],
})
export class TaskTrackerListComponent implements OnInit, AfterViewInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ["name", "priority", "startDateTime", "endDateTime"];
  dataSource: MatTableDataSource<Task>;
  pageSizeOptions = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.tasks = Array.from({ length: 100 }, (_, k) => createTask(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
/** Builds and returns a new User. */
function createTask(i: number): Task {
  return {
    name: "sdfgs" + i,
    priority: i,
    startDateTime: new Date(),
    endDateTime: new Date(),
    creationTime: new Date(),
    modificationTime: new Date(),
  };
}
