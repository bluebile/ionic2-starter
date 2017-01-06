import { Injectable } from '@angular/core';

@Injectable()
export abstract class Storage {
  abstract isEmpty(): boolean;

  abstract write(data: Object);

  abstract read();

  abstract clear();
}
