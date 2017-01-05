import { Adapter } from './adapter';

export abstract class AdapterOptions extends Adapter {
  protected options: Object;

  abstract setOptions(options: Object): this;
}
