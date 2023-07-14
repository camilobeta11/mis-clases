import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IClasses } from 'src/app/interfaces/interface';
import { ClassesService } from 'src/app/services/classes.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  classes: IClasses[] = [];

  constructor(
    private classesService: ClassesService,
    private scheduleService: ScheduleService,
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.classes = this.classesService.getClasses();
  }

  deleteClass(id: number): void {
    this.classesService.deleteClass(id);
    this.scheduleService.deleteSchedule(id);
  }

  getSchedulesByClass(classId: number): any[] {
    return this.scheduleService.getSchedulesByClass(classId);
  }

  async openModalEdit(classObj?: IClasses) {
    const modal = await this.modalCtrl.create({
      component: EditComponent,
      mode: 'ios',
      componentProps: {
        classObj
      }
    });
    await modal.present();
    await modal.onWillDismiss();
  }

}
