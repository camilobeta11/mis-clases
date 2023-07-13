import { Component, OnInit } from '@angular/core';
import { IClasses } from 'src/app/interfaces/interface';
import { ClassesService } from 'src/app/services/classes.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent  implements OnInit {

  classes: IClasses[] = [];

  constructor(
    private classesService: ClassesService,
    private scheduleService: ScheduleService
  ) {
  }

  ngOnInit() {
    this.classes = this.classesService.getClasses();
  }

  deleteClass(id: number): void {
    this.classesService.deleteClass(id);
    this.scheduleService.deleteSchedule(id);
  }

}
