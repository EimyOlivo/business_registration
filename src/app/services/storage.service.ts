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

const ITEMS_KEY = 'my-items'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

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
}
