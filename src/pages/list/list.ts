import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { AddItemPage } from '../add-item/add-item'

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data){
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = todos;
      }
    });
  }

  ionViewDidLoad(){

  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  removeItem(item){
    let index = this.items.indexOf(item);
    console.log("ITEM",item)
    console.log("INDEX: ",index)
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.dataService.save(this.items);
  }


}
