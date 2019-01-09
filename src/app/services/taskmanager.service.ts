import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task-model';

@Injectable()
export class TaskmanagerService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  getParentTaskList(): Observable<any> {
    let url = this.baseUrl + 'parenttasks/list';
    return this.http.get<any>(url);
  }

  addTask(model: TaskModel): Observable<any> {
    let url = this.baseUrl + 'tasks';
    return this.http.post(url, model);
  }

  getTasks(): Observable<any> {
    let url = this.baseUrl + 'tasks';
    return this.http.get<any>(url);
  }


  endTask(Id: number): Observable<any> {
    let url = this.baseUrl + 'tasks/delete/id/' + Id;
    return this.http.delete(url);
  }

  getTaskById(Id: number): Observable<any> {
    let url = this.baseUrl + 'tasks/id/' + Id;
    return this.http.get<TaskModel>(url);
  }

  updateTask(model: TaskModel): Observable<any> {
    let url = this.baseUrl + 'tasks/edit';
    return this.http.post(url, model);
  }

}
