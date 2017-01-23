import { Component } from '@angular/core';
import { CardService } from '../../../providers/card.service';

@Component({
    selector: 'page-card',
    templateUrl: 'card.html'
})
export class CardPage {

    cards: Array<any>;

    constructor(public cardService: CardService) {
        this.cardService.getList().then(cardList => {
            this.cards = cardList;
        });
    }
}
