import { NgModule } from '@angular/core';
import { Authentication, HttpAdapterOptionsToken, HttpAdapter } from './providers';

@NgModule({
  providers: [
    { provide: HttpAdapterOptionsToken, useValue: null },
    HttpAdapter,
    Authentication
  ]
})
export class AuthenticationModule {
}
