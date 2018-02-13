import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Item } from '../item';
import { List } from '../list';

@Component({
  selector: 'page-jogo',
  templateUrl: 'jogo.html'
})
export class JogoPage {

  shownGroup = null;

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  showModal(item):void {
    const detailsModal = this.modalCtrl.create('ItemDetailsPage', { id: item.id }); //o segundo parâmetro passa o
    detailsModal.present();                                                      //parâmetro que você deseja passar
  }                                                                              //para a seguinte página
                                                                                //(no nosso caso, o id)

}
