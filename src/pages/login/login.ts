import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Masks } from '../../util/format';
import { AlertController, MenuController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  authForm: FormGroup;
  submitAttempted: boolean = false;

  mask = Masks.cpf;

  constructor(
    public navController: NavController,
    formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    public alertCtrl: AlertController
  ) {
    this.authForm = formBuilder.group({
      cpf: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]*')])],
      password: ['', Validators.compose([Validators.required])],
    });

    /**
     * Desabilitar menu na tela login
     * */
    this.menuCtrl.enable(false);
  }

  validateForm(): boolean {
    if (this.authForm.valid) {
      return true;
    }

    let msg = '';

    if (this.authForm.controls['cpf'].hasError('required')) {
      msg = 'O CPF é obrigatório';
    } else if (this.authForm.controls['cpf'].hasError('minLength')
      || this.authForm.controls['cpf'].hasError('maxLength')
      || this.authForm.controls['cpf'].hasError('pattern')) {
      msg = 'A CPF é composto de 11 dígitos';
    } else if (this.authForm.controls['password'].hasError('required')) {
      msg = 'A senha é obrigatória';
    }

    return false;
  }

  login(): void {
    this.submitAttempted = true;

    if (this.validateForm()) {}
  }
}
