import { Component } from '@angular/core';

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

  constructor() {}


  registrar(){
    
  }
}
