export class TaskModel {
    taskId: number;
    taskName: string;
    parentId: number;
    parentTask: string;
    priority: number;
    startDate: string;
    endDate: string;
    isEditable: boolean=true;
}
