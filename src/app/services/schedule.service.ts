import { Injectable } from '@angular/core';
import { ISchedule } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules: ISchedule[] = [];

  constructor() {
    this.schedules = [
      { id: 1, classId: 1, time: '6:00 AM' },
      { id: 2, classId: 2, time: '8:00 AM' },
      { id: 3, classId: 3, time: '10:00 AM' },
      { id: 4, classId: 4, time: '2:00 AM' }

    ];
   }

   getSchedules() {
    return this.schedules;
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
  deleteSchedulesByClass(classId: number): void {
    this.schedules = this.schedules.filter(schedule => schedule.classId !== classId);
  }
}
