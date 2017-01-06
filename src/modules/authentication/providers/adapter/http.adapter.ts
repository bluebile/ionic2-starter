import { Injectable , Inject, OpaqueToken } from '@angular/core'; 
import { Http } from '@ramonornela/http';
import { Config } from '@ramonornela/configuration';
import { AdapterOptions } from './adapter.options';
import { Result, ResultCode } from '../result';

export const ConfigKeyAuth = 'authentication';

export const ConfigKeyAdapter = 'http';

export const HttpAdapterOptionsToken = new OpaqueToken('HTTPADAPTEROPTIONS'); 

export interface HttpAdapterOptions {
  url: string;
  paramNameIdentity: string;
  paramNameCredential: string;
  method?: string;
  params?: Object;
}

@Injectable()
export class HttpAdapter extends AdapterOptions {

   protected httpOptions: any = {
     params: {},
     requestOptions: {
       method: 'POST'
     },
     options: {
       plugins: {
         '*': {
           allow: false,
           throwsException: false
         }
       }
     }
   };

   private paramNameIdentity: string;

   private paramNameCredential: string;

   constructor(
     protected http: Http,
     config: Config,
     @Inject(HttpAdapterOptionsToken) options?: HttpAdapterOptions
   ) {
     super();

     if (options) {
       this.setOptions(options);
     }

     if (config) {
       // @todo adjust config to accept key authentication.http
       options = config.get(ConfigKeyAuth);

       if (options) {
         options = options[ConfigKeyAdapter] || {};
         if (options) {
           this.setOptions(options);
         }
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
     this.paramNameIdentity = name;
     return this;
   }

   setParamNameCredential(name: string): this {
     this.paramNameCredential = name;
     return this;
   }

   setOptions(options: HttpAdapterOptions): this {
     
     this.setUrl(options.url)
       .setParamNameIdentity(options.paramNameIdentity)
       .setParamNameCredential(options.paramNameCredential);

     if (options.method) {
       this.setMethod(options.method);
     }

     if (options.params) {
       this.setParams(options.params);
     }

     return this;
   }

   authenticate(): Promise<Result> {
     let options = this.httpOptions;

     options.params[this.paramNameIdentity] = this.getIdentity();
     options.params[this.paramNameCredential] = this.getCredential();

     return new Promise((resolve: any, reject: any) => {
       this.http.request(options).subscribe((response) => {
         resolve(new Result(ResultCode.SUCCESS, response));
       }, (err: any) => {
         reject(new Result(ResultCode.FAILURE, null));
       });
     });
   }
}