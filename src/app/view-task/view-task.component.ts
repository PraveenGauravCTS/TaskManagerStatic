import { Component, OnInit } from '@angular/core';
import {TaskmanagerService} from '../services/taskmanager.service';
import {TaskModel} from '../models/task-model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private service: TaskmanagerService, private router: Router) { }


  taskSearch: string;
  parentTaskSearch: string;
  priorityFromSearch: number;
  priorityToSearch: number;
  startDateSearch: Date;
  endDateSearch: Date;

  tasks: TaskModel[];

  ngOnInit() {
    this.getTasks();
  }

    getTasks(): void {
    this.service.getTasks()
      .subscribe(tasks => this.tasks = tasks.response.taskViews);
  }

  redirect(taskId: number): void {
    this.router.navigate(['./update/' + taskId]);
  }

  endTask(task: TaskModel): void {
    this.service.endTask(task.taskId).subscribe(
      x => task.isEditable = false
    );
  }

}
