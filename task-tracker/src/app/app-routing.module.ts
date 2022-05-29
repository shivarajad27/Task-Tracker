import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterTaskTrackerComponent } from './components/master-task-tracker/master-task-tracker.component';

const routes: Routes = [
  {path:"", component:MasterTaskTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
