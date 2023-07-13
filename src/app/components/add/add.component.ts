import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent  implements OnInit {

  className: string = '';

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit() {}

  addClass(): void {
    const newClass = { id: Date.now(), name: this.className };
    this.classesService.addClass(newClass);
    this.className = '';
  }

}
