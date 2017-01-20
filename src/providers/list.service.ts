import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    userList: Array<any> = [
        {
            'id': 1,
            'nome': 'Corey Taylor',
            'email': 'coreytaylor@email.com',
            'telefone': '55 553-4332'
        },
        {
            'id': 2,
            'nome': 'James Root',
            'email': 'jamesroot@email.com',
            'telefone': '51 555-8372'
        },
        {
            'id': 3,
            'nome': 'Shawn Crahan',
            'email': 'shawncrahan@email.com',
            'telefone': '51 555-2341'
        },
        {
            'id': 4,
            'nome': 'Craig Jones',
            'email': 'craigjones@email.com',
            'telefone': '51 555-4235'
        }
    ];

  constructor(public http: Http) {
  }

  getList(): Promise<Array<any>> {
        let userList = this.userList;
        return Promise.resolve(userList);
  }
}
