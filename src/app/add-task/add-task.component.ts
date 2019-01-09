import { Component, OnInit } from '@angular/core';
import {TaskmanagerService} from '../services/taskmanager.service';
import {TaskModel} from '../models/task-model'
import { FormGroup, Validators, FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  form : FormGroup;
  formSubmitted = false;
  taskModel: TaskModel;
  parentTaskList: TaskModel[];

  constructor(private taskmanagerService:TaskmanagerService, private router: Router) { }

  getParentTaskList():void{
    this.taskmanagerService.getParentTaskList().subscribe(parentTasks=>this.parentTaskList=parentTasks.response.parentTaskViews)
  }

  ngOnInit() {
    this.form = new FormGroup({
      taskName: new FormControl('', Validators.required),
      priority: new FormControl(1, Validators.min(1)),
      parentTask: new FormControl(''),
      parentId: new FormControl(''),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
    this.getParentTaskList();
  }

  onSubmit() {
    this.formSubmitted = true;
    if (!this.form.invalid) {
      this.taskModel = new TaskModel();
      this.taskModel.taskName= this.form.value.taskName;
      this.taskModel.priority = this.form.value.priority;
      this.taskModel.parentId = this.form.value.parentId;
      this.taskModel.startDate = this.form.value.startDate;
      this.taskModel.endDate = this.form.value.endDate;
      this.taskmanagerService.addTask(this.taskModel).subscribe(() => { this.router.navigate(['']); });
    }
  }

  get vldtn() { return this.form.controls; }

  ResetTaskForm() {
    this.form.reset();
  }

}
