import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { Storage } from '@ionic/storage';

export interface Item{
  id: number,
  nombre: string,
  tipo: string,
  telefono: number,
  direccion:string,
  latitud: number,
  longitud: number,
  foto: string
}

const ITEMS_KEY = 'my-items'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
    storage.create();
  }

  //create by kory
  addItem(item:Item) :Promise <any>{

    return this.storage.get (ITEMS_KEY).then((items:Item[])=>{
      if (items){
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);

      }
      else{
        return this.storage.set(ITEMS_KEY, [item]);
      }

    });

  }
  //read by kory
  getItem(item:Item):Promise<Item[]>{

    return this.storage.get(ITEMS_KEY);
  }

  getItems(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEY)
  }
}
