import { Injectable } from '@angular/core';
import { ISchedule } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules: ISchedule[] = [];

  constructor() {
    this.schedules = [
      { id: 1, classId: 1, time: '10:00 AM' },
      { id: 2, classId: 2, time: '2:00 PM' },
      { id: 3, classId: 1, time: '5:00 PM' }
    ];
   }

   getSchedulesByClass(classId: number): ISchedule[] {
    return this.schedules.filter(value => value.classId === classId);
  }

  addSchedule(schedule: ISchedule): void {
    this.schedules.push(schedule);
  }

  editSchedule(id: number, updatedSchedule: ISchedule): void {
    const index = this.schedules.findIndex(value => value.id === id);
    if (index !== -1) {
      this.schedules[index] = updatedSchedule;
    }
  }

  deleteSchedule(id: number): void {
    const index = this.schedules.findIndex(value => value.id === id);
    if (index !== -1) {
      this.schedules.splice(index, 1);
    }
  }
}
