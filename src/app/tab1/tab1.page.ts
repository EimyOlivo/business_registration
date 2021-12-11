import { Component } from '@angular/core';
import { Item, StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items:Item[]=[];

  constructor(private storageService: StorageService) {}
  

  async ionViewDidEnter(){
    await this.loadItems();
  }

  async loadItems(){
    await this.storageService.getItems().then(x =>{
      this.items = x;
    });
  }

}
