import { Masks, Validators as ValidatorsInternal } from '../../util';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Adapter, Authentication } from '@ramonornela/authentication';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  form: FormGroup;
  submitAttempted: boolean = false;

  mask = Masks.cpf;

  constructor(
    formBuilder: FormBuilder,
    private authAdapter: Adapter,
    private auth: Authentication
  ) {
    this.form = formBuilder.group({
      cpf: ['', Validators.compose([Validators.required, ValidatorsInternal.cpf ])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  validate(): boolean {
    if (this.form.valid) {
      return true;
    }

    let msg = '';

    if (this.form.controls['cpf'].hasError('required')) {
      msg = 'O CPF é obrigatório';
    } else if (this.form.controls['cpf'].hasError('minLength')
      || this.form.controls['cpf'].hasError('maxLength')
      || this.form.controls['cpf'].hasError('pattern')) {
      msg = 'A CPF é composto de 11 dígitos';
    } else if (this.form.controls['password'].hasError('required')) {
      msg = 'A senha é obrigatória';
    }

    console.log(msg);

    return false;
  }

  login(formData: any): void {
    this.submitAttempted = true;

    if (this.validate()) {
      this.authAdapter
        .setIdentity(formData.cpf.replace(/\D/g, ''))
        .setCredential(formData.password);

      this.auth.authenticate().then(() => {
        alert('login success');
      }).catch(() => {
        alert('login failure');
      });
    }
  }
}
