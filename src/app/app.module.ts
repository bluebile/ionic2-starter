import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TextMaskModule } from 'angular2-text-mask';
import { Storage } from '@ionic/storage';
import { ConfigurationModule } from '@ramonornela/configuration';
import { UrlResolverModule } from '@ramonornela/url-resolver';
import { HttpModule, DefaultPlugins, ThrowExceptionStatusToken } from '@ramonornela/http';
import { HttpPluginsIonicModule } from '@ramonornela/http-plugins-ionic';
import { MyApp } from './app.component';
import { Pages } from '../pages/pages';
import { Providers } from '../providers/providers';
import { AppConfig } from './app.config';
import { Env, ProviderEnv } from './app.env';
import { HttpAdapter } from '../modules/authentication';

// extração mensagem de erro do serviço
export function extraMessageError(response: any) {
  
}

@NgModule({
  declarations: [
    MyApp,
    Pages
  ],
  imports: [
    IonicModule.forRoot(MyApp, AppConfig),
    TextMaskModule,
    ConfigurationModule.initialize(AppConfig, Env),
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins),
    HttpPluginsIonicModule
  ],
  providers: [
    Storage,
    Providers,
    { provide: ThrowExceptionStatusToken, useValue: extraMessageError },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProviderEnv,
    HttpAdapter
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ]
})
export class AppModule {
}
