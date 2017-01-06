import { Injectable , Inject, OpaqueToken } from '@angular/core'; 
import { Http } from '@angular/http';
import { Config } from '@ramonornela/configuration';
import { Resolve } from '@ramonornela/url-resolver';
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

   protected url: string;

   protected params: Object = {};

   protected paramNameIdentity: string = 'username';

   protected paramNameCredential: string = 'password';

   protected requestOptions: any = {
     method: 'POST'
   };

   constructor(
     protected http: Http,
     protected resolve: Resolve,
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
     this.url = url;
     return this;
   }

   setMethod(method: string): this {
     this.requestOptions.method = method;
     return this;
   }

   setParams(params: Object): this {
     this.params = params;
     return this;
   }

   setHeaders(headers: Object): this {
     this.requestOptions.headers = headers;
     return this;
   }

   setRequestOptions(options: any): this {
     this.requestOptions = options;
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

     delete options.url;
     delete options.paramNameIdentity;
     delete options.paramNameCredential;

     if (options.method) {
       this.setMethod(options.method);
       delete options.method;
     }

     if (options.params) {
       this.setParams(options.params);
       delete options.params;
     }

     this.setRequestOptions(options);

     return this;
   }

   authenticate(): Promise<Result> {
     let params = this.params;

     params[this.paramNameIdentity] = this.getIdentity();
     params[this.paramNameCredential] = this.getCredential();

     let url = this.resolve.url(this.url, params);
     return new Promise((resolve: any, reject: any) => {
       this.http.request(url, this.requestOptions).subscribe((response) => {
         resolve(this.createResultSuccess(response));
       }, (err: any) => {
         reject(this.createResultFailure(err));
       });
     });
   }

   protected createResultSuccess(response: any): Result {
     return new Result(ResultCode.SUCCESS, this.getIdentity(), response.json() || response.body());
   }

   protected createResultFailure(err: any): Result {
     return new Result(ResultCode.FAILURE);
   }
}