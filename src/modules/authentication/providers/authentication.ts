import { Injectable, Optional } from '@angular/core';
import { Storage, LocalStorage } from './storage';
import { Adapter } from './adapter';
import { Result } from './result';

@Injectable()
export class Authentication {
  constructor(
    @Optional() private storage: Storage,
    @Optional() private adapter: Adapter) {}
  
  setStorage(storage: Storage): this {
    this.storage = storage;
    return this;
  }

  getStorage(): Storage {
    if (!this.storage) {
      this.setStorage(new LocalStorage());
    }

    return this.storage;
  }

  setAdapter(adapter: Adapter): this {
    this.adapter = adapter;
    return this;
  }

  getAdapter(): Adapter {
    return this.adapter;
  }

  authenticate(adapter?: Adapter) {
    if (!adapter) {
      adapter = this.getAdapter();
    }

    if (!adapter) {
      throw new Error('Adapter is required');
    }

    adapter.authenticate().then((result: Result) => {
      if (result.isValid()) {
        this.getStorage().write({
          identity: result.getIdentity(),
          data: result.getData()
        });
      }
    });
  }
}
