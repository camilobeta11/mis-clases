import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent  implements OnInit {

  @Output() addValue = new EventEmitter();
  className: string = '';

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit() {}

  addClass(): void {
    const newClass = { id: Date.now(), name: this.className };
    this.classesService.addClass(newClass);
    this.className = '';
    this.addValue.emit(true);
  }

}
