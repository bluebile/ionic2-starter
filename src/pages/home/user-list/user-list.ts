import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../../services/user/user';
import { UserDetailPage } from '../../user-detail/user-detail';
import { UserModel } from '../../../services/user/user.model';

@Component({
    selector: 'page-userlist',
    templateUrl: 'user-list.html',
    providers: [ UserService ]
})
export class UserListPage implements OnInit {

    users: UserModel[] = null;

    constructor(public navCtrl: NavController, public userService: UserService) {
    }

    /**
     * Exemplo de  Navegação passando a Model para a página seguinte
     * @param user
     */
    detalharUsuario(user) {
        this.navCtrl.push(UserDetailPage, {user: user});
        console.log(user);
    }

    ngOnInit(): void {
        this.userService.getAll().then((users) => {
            this.users = users;
        }).catch((erro) => {
            this.users = [];
            console.log(erro);
        });
    }
}
