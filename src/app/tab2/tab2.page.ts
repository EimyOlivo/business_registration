import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Item, StorageService } from '../services/storage.service';
//import { CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  base64Image: string;
  items:Item[]=[];
  newItem: Item = <Item>{};

  // @ViewChild('mylist') mylist: List;


  constructor(private storageService: StorageService,private plt:Platform,private toastController:ToastController, private camera: Camera) {
    this.plt.ready().then(()=> {
      this.loadItems();
    });
  }
  

 

  Capturarimg(options: CameraOptions)
  {
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  cam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };
    this.Capturarimg(options);
  }

  
  Cam2() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    this.Capturarimg(options);
  }

  //create by kory
  addItem(){
    this.newItem.foto = this.base64Image;
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item =>{
      this.newItem = <Item>{};
      //this.showToast('Item added') //esto da error pero no es importante
      this.loadItems(); // array directo

    });


  }
  //read by kory
  loadItems(){
    this.storageService.getItems().then(items =>{
      this.items = items;
    });
  }




}
