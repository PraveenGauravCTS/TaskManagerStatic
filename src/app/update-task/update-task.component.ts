import { Component, OnInit } from '@angular/core';
import {TaskmanagerService} from '../services/taskmanager.service';
import {TaskModel} from '../models/task-model'
import { FormGroup, Validators, FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private taskmanagerService:TaskmanagerService, private route: ActivatedRoute, private router: Router) { }

  updateTaskForm: FormGroup;
  formSubmitted = false;
  taskModel: TaskModel;
  parentTaskList: TaskModel[];
  isDataLoaded = false;

  ngOnInit() {
    this.getParentTaskList();

    const taskid: number = this.route.snapshot.params.id;
    this.taskmanagerService.getTaskById(taskid).subscribe(
      o => {
        this.taskModel = o.response;
        if (this.taskModel) {
             
          this.updateTaskForm = new FormGroup({
            taskName: new FormControl(this.taskModel.taskName, Validators.required),
            priority: new FormControl(this.taskModel.priority, Validators.min(1)),
            parentId: new FormControl(this.taskModel.parentId),
            startDate: new FormControl(new Date(this.taskModel.startDate).toISOString().substring(0, 10), Validators.required),
            endDate: new FormControl(new Date(this.taskModel.endDate).toISOString().substring(0, 10), Validators.required)
          });
         
          this.isDataLoaded = true;
        }
      }
    );
  }

  getParentTaskList():void{
    this.taskmanagerService.getParentTaskList().subscribe(parentTasks=>this.parentTaskList=parentTasks.response.parentTaskViews)
  }

  get vldtn() { return this.updateTaskForm.controls; }

  onSubmit() {
    this.formSubmitted = true;

    if (!this.updateTaskForm.invalid) {
      this.taskModel.taskName = this.updateTaskForm.value.taskName;
      this.taskModel.priority = this.updateTaskForm.value.priority;
      this.taskModel.parentId = this.updateTaskForm.value.parentId;
      this.taskModel.startDate = this.updateTaskForm.value.startDate;
      this.taskModel.endDate = this.updateTaskForm.value.endDate;
      this.taskmanagerService.updateTask(this.taskModel).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  onCancel(){
    this.router.navigate(['']);
  }

}
