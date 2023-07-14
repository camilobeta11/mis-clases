import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IClasses, ISchedule } from 'src/app/interfaces/interface';
import { ToastService } from 'src/app/providers/toast.service';
import { ClassesService } from 'src/app/services/classes.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  class: IClasses = {
    name: '',
    id: 0
  };
  schedule: ISchedule = {
    id: 0,
    classId: 0,
    time: ''
  };

  constructor(
    private classesService: ClassesService,
    private scheduleService: ScheduleService,
    private navCtrl: NavController,
    private toastService: ToastService
  ) { }

  ngOnInit() {}

  addClass(): void {
    const newClass = { id: Date.now(), name: this.class.name };
    console.log(newClass)
    this.classesService.addClass(newClass);
    this.class = {
      name: '',
      id: 0
    };
    this.addSchedule(newClass.id);
  }

  addSchedule(classId: number) {
    const newSchedule = { id: Date.now(), time: this.schedule.time, classId: classId };
    this.scheduleService.addSchedule(newSchedule);
    this.schedule = {
      id: 0,
      classId: 0,
      time: ''
    };
    this.navCtrl.navigateForward('/home')
    this.toastService.toast('Agregado correctamente!');
  }
}
