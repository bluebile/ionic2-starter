import { Component } from '@angular/core';
import { ListService } from '../../../providers/list.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

    users: Array<any>;

  constructor(public listService: ListService) {
      this.listService.getList().then( userList => {
          this.users = userList;
      });
  }
}
