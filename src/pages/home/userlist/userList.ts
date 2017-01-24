import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../../services/user/user';
import { UserDetailPage } from '../../../pages/userdetail/userDetail';

@Component({
    selector: 'page-userlist',
    templateUrl: 'userList.html',
    providers: [ UserService ]
})

export class UserListPage {

    users: any;

    constructor(public navCtrl: NavController, public userService: UserService) {

        try {
            this.userService.list().then((result) => {
                this.users = result;
            });
        } catch (erro) {
            console.log(erro);
        }
    }

    /* Exemplo de  Navegação passando a Model para a página seguinte*/

    detalharUsuario(user) {
        this.navCtrl.push(UserDetailPage, user);
        console.log(user);
    }
}
