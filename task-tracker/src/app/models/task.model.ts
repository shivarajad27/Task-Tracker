export interface Task {
  name: string;
  priority: number;
  startDateTime: Date;
  endDateTime: Date;
  creationTime: Date;
  modificationTime?: Date;
}
