import { Pipe, PipeTransform } from '@angular/core';
import {TaskModel} from '../models/task-model'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: TaskModel[], taskSearch: string, parentTaskSearch: string, priorityFromSearch: number,
    priorityToSearch: number, startDateSearch: Date, endDateSearch: Date): TaskModel[] {

    if (!items) return [];
    if (!taskSearch && !parentTaskSearch && !priorityFromSearch && !priorityToSearch
      && !startDateSearch && !endDateSearch)
      return items;

    return items.filter(it => {
      if (taskSearch && (it.taskName==undefined || it.taskName.toLowerCase().indexOf(taskSearch.toLowerCase()) == -1))
        return false;

      if (parentTaskSearch && ((!it.parentTask) || (it.parentTask==undefined || it.parentTask.toLowerCase().indexOf(parentTaskSearch.toLowerCase()) == -1)))
        return false;

      if (priorityFromSearch && it.priority < priorityFromSearch)
        return false;

      if (priorityToSearch && it.priority > priorityToSearch)
        return false;

      if (startDateSearch && new Date(it.startDate) < new Date(startDateSearch))
        return false;

      if (endDateSearch && new Date(it.endDate) > new Date(endDateSearch))
        return false;

      return true;
    });
  }
}
