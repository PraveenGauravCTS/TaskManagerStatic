import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskmanagerService } from './services/taskmanager.service';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { UpdateTaskComponent } from './update-task/update-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    ViewTaskComponent,
    AddTaskComponent,
    FilterPipe,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskmanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
