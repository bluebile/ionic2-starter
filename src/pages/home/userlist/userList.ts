import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user';

@Component({
    selector: 'page-userlist',
    templateUrl: 'userList.html',
    providers: [ UserService ]
})

export class UserListPage {

    users: any;

    constructor(public userService: UserService) {

        try {
            this.userService.list().then((result) => {
                this.users = result;
            });
        } catch (erro) {
            console.log(erro);
        }
    }
}
