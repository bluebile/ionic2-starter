import { NgModule } from '@angular/core';
import { HttpAdapterOptionsToken, HttpAdapter } from './providers';
import { Authetication } from './authentication';

@NgModule({
  providers: [
    { provide: HttpAdapterOptionsToken, useValue: null },
    HttpAdapter,
    Authentication
  ]
})
export class AuthenticationModule {
}
