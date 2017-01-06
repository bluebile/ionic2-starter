import { Injectable } from '@angular/core'; 
import { Storage } from './storage';

export const KeyId = '_authlocalstorage';

@Injectable()
export class LocalStorage implements Storage {
  isEmpty() {
    return localStorage.getItem(KeyId) === null;
  }

  write(data: Object) {
    localStorage.setItem(KeyId, JSON.stringify(data));
  }

  read() {
    return JSON.parse(localStorage.getItem(KeyId));
  }

  clear() {
    localStorage.setItem(KeyId, null);
  }
}
