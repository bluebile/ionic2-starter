import { Injectable } from '@angular/core'; 
import { Storage } from './storage';

export const KeyId = '_authnoopersist';

@Injectable()
export class NonPersistent implements Storage {
  
  private data: any = {};

  isEmpty(): boolean {
    return this.data[KeyId] === undefined || this.data[KeyId] === null;
  }

  write(data: Object) {
    this.data[KeyId] = data;
  }

  read() {
    return this.data[KeyId];
  }

  clear() {
    delete this.data[KeyId];
  }
}
