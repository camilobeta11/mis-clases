import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valueSegment: string = 'list'
  constructor(
    private toastController: ToastController
  ) {}

  changeSegment(event: Event) {
    if (event) {
      this.toastConnection();
      this.valueSegment = 'list';
    }
  }

    async toastConnection() {
    const toast = await this.toastController.create({
      header: 'Clase agregada con éxito!',
      mode: 'ios',
      position: 'bottom',
      cssClass: 'toast',
      duration: 5000,
    });
    toast.present();
  }
}
