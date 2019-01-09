import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ViewTaskComponent} from './view-task/view-task.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {UpdateTaskComponent} from './update-task/update-task.component';


const routes: Routes = [
  { path: '', component: ViewTaskComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'update/:id', component: UpdateTaskComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
