import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';


declare var google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map: any;
  @ViewChild('map', {read: ElementRef, static: true}) mapRef: ElementRef;

 /* nombre:String = null;
  longitud:number= null;
  latitud:number = null;
  infoWindows:any = []
 
  markers: any = []  */


  constructor() {}

  ionViewDidEnter(){
    this.loadMap();
  }

  /*addMarkersToMap(markers){
    markers = [{
      titles: this.nombre,
      latitudes: this.latitud,
      longitudes: this.longitud
    }];

    for(let marker of markers){
      console.log(marker);
      console.log(this.nombre);
      console.log(this.latitud);
      console.log(this.longitud);
      let position = new google.maps.LatLng(marker.latitudes, marker.longitudes);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.titles, 
        latitud: marker.latitudes,
        longitud: marker.longitudes

      })
      console.log(mapMarker);
      mapMarker.setMap(this.map)
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div>'+
                            '<h2 id="firstHeading" class = "negra" style="color: black;">'+ this.nombre + '</h2>' +
                            '<p style="color: black;">Latitud:' + this.latitud +'</p>' +
                            '<p style="color: black;">Longitud:' + this.longitud +'</p>' +
                            '<p style="color: black;">Pais: Republica Dominicana</p>' +
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
  }*/

  loadMap() {
    const location = new google.maps.LatLng(4.658383846282959, -74.09394073486328);
    const options = {
      center: location,
      Zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    //this.addMarkersToMap(this.markers)
  }
}

