import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component } from '@angular/core';
import { CameraOptions } from '@capacitor/camera';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { PhotoService } from '../services/photo.service';
<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
<<<<<<< Updated upstream
  nombre: string;
  tipo: string;
  telefono: string;
  direccion: string;
  latitud: number;
  longitud: number;
  foto: string;
  camera: string;
  
=======
   
  items:Item[]=[];
  newItem: Item = <Item>{};

  // @ViewChild('mylist') mylist: List;


<<<<<<< Updated upstream
  constructor(private storageService: StorageService,private plt:Platform,private toastController:ToastController,public photoService: PhotoService ) {
=======
  constructor(private storageService: StorageService,private plt:Platform,private toastController:ToastController, public photoService: PhotoService) {
>>>>>>> Stashed changes
    this.plt.ready().then(()=> {
      this.loadItems();
    });
  }

<<<<<<< Updated upstream
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
=======
  
addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
>>>>>>> Stashed changes

  //create by kory
  addItem(){
    this.newItem.id = Date.now();
>>>>>>> Stashed changes

  constructor() {}



  registrar(){
    
  }
}
