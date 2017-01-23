import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CardService {

    imagem: any;

    cardList: Array<any> = [
        {
            'id': 1,
            'nome': 'Marty McFly',
            'dia': '5',
            'mes': 'novembro',
            'ano': '1955',
            'imagem': this.imagem,
            'descricao': `The quick brown fox jumps over the lazy dog and feels like he is in the seventh heaven of typography
            along with his friend Hermann-Zapf.`
        },
        {
            'id': 2,
            'nome': 'Corey Taylor',
            'dia': '10',
            'mes': 'outubro',
            'ano': '2009',
            'descricao': `The quick brown fox jumps over the lazy dog and feels like he is in the seventh heaven of typography
            along with his friend Hermann-Zapf.`
        },
        {
            'id': 3,
            'nome': 'Mick Thompson',
            'dia': '13',
            'mes': 'setembro',
            'ano': '1982',
            'descricao': `The quick brown fox jumps over the lazy dog and feels like he is in the seventh heaven of typography
            along with his friend Hermann-Zapf.`
        }
    ];

    constructor(public http: Http) {
    }

    getList (): Promise<Array<any>> {
      let cardList = this.cardList;
      return Promise.resolve(cardList);
    }
}
