import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  imageSrc!: any;
  constructor() { }

  ngOnInit() {
  }

  takePicture() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then(image => {
      const imageUrl = image.webPath;
      this.imageSrc = imageUrl;
    }).catch(error => {
      console.log('Error al tomar la foto:', error);
    });
  }

}
