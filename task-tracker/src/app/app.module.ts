import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTrackerListComponent } from './components/task-tracker-list/task-tracker-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { MasterTaskTrackerComponent } from './components/master-task-tracker/master-task-tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerListComponent,
    AddTaskComponent,
    MasterTaskTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
