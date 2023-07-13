import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
