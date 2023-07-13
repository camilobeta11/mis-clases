import { Injectable } from '@angular/core';
import { IClasses } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private classes: IClasses[] = [];

  constructor() {
    this.classes = [
      { id: 1, name: 'Class 1' },
      { id: 2, name: 'Class 2' },
      { id: 3, name: 'Class 3' }
    ];
  }

  getClasses(): IClasses[] {
    return this.classes;
  }

  addClass(classObj: IClasses): void {
    this.classes.push(classObj);
  }

  editClass(id: number, updatedClass: IClasses): void {
    const index = this.classes.findIndex(value => value.id === id);
    if (index !== -1) {
      this.classes[index] = updatedClass;
    }
  }

  deleteClass(id: number): void {
    const index = this.classes.findIndex(value => value.id === id);
    if (index !== -1) {
      this.classes.splice(index, 1);
    }
  }
}
