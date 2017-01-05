import { Http as HttpRequest } from '@ramonornela/http';
import { Config } from '@ramonornela/configuration';
import { AdapterOptions } from './adapter-options';
import { Result } from '../result';

export const ConfigKeyAuth = 'authentication';

export const ConfigKeyAdapter = 'http';

interface HttpOptions {
  url: string;
  paramNameIdentity: string;
  paramNameCredential: string;
  method?: string;
  params?: Object;
}

export class Http extends AdapterOptions {

   protected httpOptions: any = {
     params: {},
     options: {
       method: 'POST'
     },
     requestOptions: {
       plugins: {
         '*': {
           throwsException: false
         }
       }
     }
   };

   constructor(
     protected http: HttpRequest,
     config: Config,
     options?: HttpOptions
   ) {
     super();

     if (options) {
       this.setOptions(options);
     }

     if (config) {
       // @todo adjust config to key authentication.http
       options = config.get(ConfigKeyAuth);
       options = options[ConfigKeyAdapter] || {};
       if (options) {
         this.setOptions(options);
       }
     }
   }

   setUrl(url: string): this {
     this.httpOptions.url = url;
     return this;
   }

   setMethod(method: string): this {
     this.httpOptions.options.method = method;
     return this;
   }

   setParams(params: Object): this {
     this.httpOptions.params = params;
     return this;
   }

   setParamNameIdentity(name: string): this {
     this.httpOptions.paramNameIdentity = name;
     return this;
   }

   setParamNameCredential(name: string): this {
     this.httpOptions.paramNameCredential = name;
     return this;
   }

   setOptions(options: HttpOptions): this {
     
    this.setUrl(options.url);

     if (options.method) {
       this.setMethod(options.method);
     }

     if (options.params) {
       this.setParams(options.params);
     }

     return this;
   }

   authenticate(): Promise<any> {
     let options = this.httpOptions;

     options.params[options.paramNameIdentity] = this.getIdentity();
     options.params[options.paramNameCredential] = this.getCredential();

     delete options.paramNameIdentity;
     delete options.paramNameCredential;

     return new Promise((resolve: any, reject: any) => {
       this.http.request(options).subscribe((response) => {
         alert('sadsadas');
       });
     });
   }
}