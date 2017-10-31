import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/Storage';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData(){
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }

  delete(item){
    this.storage.remove(item.title)
  }

}
