import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Item } from '../item';
import { List } from '../list';

@Component({
  selector: 'page-jogo',
  templateUrl: 'jogo.html'
})
export class JogoPage {

  selectedItem: Item;

  itens: Item[] = [
     { id: 1, status: 1, name: 'The Legend of Zelda: Breath of the Wild', release: 2017,
      sinopse: 'Male Zelda defeating enemies', developer: 'Nintendo'},
     { id: 2, status: 1, name: 'Super Mario Odissey', release: 2017, sinopse: 'Mario saving Peach as always',
      devoloper: 'Nintendo'},
     { id: 3, status: 2, name: 'FIFA 18', release: 2017, sinopse:'Soccer', developer: 'EA'},
     { id: 4, status: 2, name: 'Need for Speed Payback', release: '2017', sinopse:'Car race', developer: 'EA'},
     { id: 5, status: 3, name: 'The Witcher 3: Wild Hunt', release: '2015', sinopse: 'I dont know',
      developer: 'CD'}
   ];

    lists: List[] = [
      { id: 1, name: 'Lista de desejos'},
      { id: 2, name: 'Jogados'},
      { id: 3, name: 'Não jogados'}
  ];

  onSelect(item: Item):void {
    this.selectedItem = item;
    this.navController.setRoot(ItemDetailsPage);
  }

  passItem(): Item {
    return this.selectedItem;
  }

  constructor(public navCtrl: NavController) {

  }

}
