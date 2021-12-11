import { Injectable } from '@angular/core';

export interface Item{
  id: number,
  nombre: string,
  tipo: string,
  telefono: number,
  direccion:string,
  latitude: number,
  longitude: number,
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
}
