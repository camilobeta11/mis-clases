import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async toast(name: string) {
    const toast = await this.toastController.create({
      header: name,
      mode: 'ios',
      position: 'bottom',
      cssClass: 'toast',
      duration: 5000,
    });
    toast.present();
  }
}
