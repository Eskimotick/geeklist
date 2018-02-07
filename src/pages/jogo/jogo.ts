import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../item';
import { List } from '../list';

@Component({
  selector: 'page-jogo',
  templateUrl: 'jogo.html'
})
export class JogoPage {

  itens: Item[] = [
     { id: 1, name: 'The Legend of Zelda: Breath of the Wild'},
     { id: 1, name: 'Super Mario Odissey'},
     { id: 2, name: 'FIFA 18'},
     { id: 2, name: 'Need for Speed Payback'},
     { id: 3, name: 'The Witcher 3: Wild Hunt'}
   ];

    lists: List[] = [
      { id: 1, name: 'Lista de desejos'},
      { id: 2, name: 'Jogados'},
      { id: 3, name: 'Não jogados'}
  ];

  constructor(public navCtrl: NavController) {

  }

}
