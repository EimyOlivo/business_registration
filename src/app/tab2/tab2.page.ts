import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import {HttpClientModule} from '@angular/common/http'
import {Camera, DestinationType} from '@ionic-native/camera/ngx'
import {StatusBar} from '@ionic-native/status-bar/ngx'
import {SplashScreen} from '@ionic-native/splash-screen/ngx'
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations:[AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap:[AppComponent ]
})

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

  imgURL; 

  constructor(private camara: Camera) {
    
  }


  registrar(){
    
  }


  getCamara(){ 
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.CAMERA,
      destinationType: this.camara.DestinationType.FILE_URI
    }).then((res)=>{
      this.imgURL = res;
    }).catch(e => {
      console.log[e];
    })  
  }

  getGaleria(){
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camara.DestinationType.DATA_URL
    }).then((res)=>{
      this.imgURL ='data:image/jpeg;base64' + res;
    }).catch(e => {
      console.log[e];
    })   
  }
}
