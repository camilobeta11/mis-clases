import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IClasses } from 'src/app/interfaces/interface';
import { ToastService } from 'src/app/providers/toast.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  @Input() classObj!: IClasses

  constructor(
    private classesService: ClassesService,
    private modalCtrl: ModalController,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  editClass(): void {
    this.classesService.editClass(this.classObj.id, this.classObj);
    this.toastService.toast('Editado correctamente!');
    this.closeModal();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
