import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSelect, ModalController } from '@ionic/angular';
import { IClasses, ISchedule } from 'src/app/interfaces/interface';
import { ClassesService } from 'src/app/services/classes.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { EditComponent } from '../edit/edit.component';
import { ToastService } from 'src/app/providers/toast.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @ViewChild('scheduleSelect') scheduleSelect!: IonSelect;

  showSelect = false;
  classes: IClasses[] = [];
  schedule: ISchedule = {
    id: 0,
    classId: 0,
    time: ''
  };
  constructor(
    private alertCtrl: AlertController,
    private classesService: ClassesService,
    private scheduleService: ScheduleService,
    private modalCtrl: ModalController,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    const classes = this.classesService.getClasses();
  }

  async alertDelete(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar clase',
      buttons: [
        {
          text: 'Cancelar',
          handler: async () => {
          },
        },
        {
          text: 'Aceptar',
          handler: async () => {
            this.deleteClass(id);
          },
        }
      ],
    });
    await alert.present();
  }

  deleteClass(id: number): void {
    this.classesService.deleteClass(id);
    this.scheduleService.deleteSchedule(id);
    this.toastService.toast('Clase eliminada!');
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

  deleteSchedule(id: number): void {
    this.scheduleService.deleteSchedule(id);
  }

  openSchedule(classId: number) {
    this.scheduleSelect.open();
    this.schedule.classId = classId;
  }

  onSelectChange(event: any) {
    const value = event.detail.value;
    if (value) {
      this.schedule.time = value;
      this.addSchedule();
    }

  }
  addSchedule() {
    const newSchedule = { id: Date.now(), time: this.schedule.time, classId: this.schedule.classId };
    this.scheduleService.addSchedule(newSchedule);
    this.schedule = {
      id: 0,
      classId: 0,
      time: ''
    };
    this.schedule.time = '';

  }
}
