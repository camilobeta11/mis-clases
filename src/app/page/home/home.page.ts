import { Component } from '@angular/core';
import { ToastService } from '../../providers/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valueSegment: string = 'list'
  constructor(
    private toastService: ToastService
  ) {}

  changeSegment(event: Event) {
    if (event) {
      this.toastService.toast('Agregado correctamente!');
      this.valueSegment = 'list';
    }
  }

}
