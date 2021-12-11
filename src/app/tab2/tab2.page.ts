import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component } from '@angular/core';
import { CameraOptions } from '@capacitor/camera';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nombre: string;
  tipo: string;
  telefono: string;
  direccion: string;
  latitud: number;
  longitud: number;
  foto: string;
  camera: string;
  

  constructor() {}



  registrar(){
    
  }
}
