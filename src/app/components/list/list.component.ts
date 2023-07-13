import { Component, OnInit } from '@angular/core';
import { IClasses } from 'src/app/interfaces/interface';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  classes: IClasses[] = [];

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    this.classes = this.classesService.getClasses();
  }

}
