import { AdapterOptions } from './adapter-options';
import { Http as HttpRequest } from '@ramonornela/http';

export class Http extends AdapterOptions {
   
   constructor(private http: HttpRequest, options?: Object) {
     super();
     if (options) {
       this.setOptions(options);
     }
   }

   setOptions(options: Object): this {
     return this;
   }

   authenticate(): Promise<any> {
     // this.http.request();
     return Promise.resolve(1);
   }
}