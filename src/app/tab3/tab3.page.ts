import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { Item, StorageService } from '../services/storage.service';

declare var google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map: any;
  items:Item[]=[];

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  //markers: any = []  
  infoWindows: any = []


  constructor(private storageService: StorageService) {}

  ionViewDidEnter(){
    this.loadMap();
  }

  async loadItems(){
    await this.storageService.getItems().then(x =>{
      this.items = x;
    });
  }

  addMarkersToMap(markers){

    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitud, marker.longitud);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.nombre, 
        latitud: marker.latitud,
        longitud: marker.longitud

      })
      mapMarker.setMap(this.map)
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div>'+
                            '<h2 id="firstHeading" class = "negra" style="color: black;">'+ marker.title + '</h2>' +
                            '<p style="color: black;">Latitud:' + marker.latitud +'</p>' +
                            '<p style="color: black;">Longitud:' + marker.longitud +'</p>' +
                            '</div>';
    
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () =>{
      this.closeAllInforWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInforWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  async loadMap() {
    await this.loadItems();
    const location = new google.maps.LatLng(4.658383846282959, -74.09394073486328);
    const options = {
      center: location,
      Zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.items)
  }
}

