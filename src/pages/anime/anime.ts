import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../item';
import { List } from '../list';

@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html'
})
export class AnimePage {

  itens: Item[] = [
     { id: 1, name: 'Future Diary'},
     { id: 2, name: 'One Piece'},
     { id: 2, name: 'My Hero Academy'},
     { id: 3, name: 'Naruto'}
   ];


    lists: List[] = [
      { id: 1, name: 'Quero Assitir'},
      { id: 2, name: 'Assistindo'},
      { id: 3, name: 'Assistidos'}
  ];

  constructor(public navCtrl: NavController) {

  }

}
