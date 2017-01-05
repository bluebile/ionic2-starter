import { Injectable } from '@angular/core';

@Injectable()
export abstract class Adapter {
  private identify: string;

  private credential: string;

  setIdentity(identity: string): this {
    this.identify = identity;
    return this;
  }

  getIdentity(): string {
    return this.identify;
  }

  setCredential(credential: string): this {
    this.credential = credential;
    return this;
  }

  getCredential(): string {
      return this.credential;
  }

  abstract authenticate(): Promise<any> ;
}
