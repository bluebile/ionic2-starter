import { Pages } from '../pages/pages';
import { Providers } from '../providers/providers';
import { MyApp } from './app.component';
import { AppConfig } from './app.config';
import { Env, ProviderEnv } from './app.env';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Adapter, AuthenticationHttpModule, HttpAdapter } from '@ramonornela/authentication';
import { ConfigurationModule } from '@ramonornela/configuration';
import { DefaultPlugins, HttpModule, ThrowExceptionStatusToken } from '@ramonornela/http';
import { HttpPluginsIonicModule } from '@ramonornela/http-plugins-ionic';
import { UrlResolverModule } from '@ramonornela/url-resolver';
import { TextMaskModule } from 'angular2-text-mask';
import { IonicApp, IonicModule } from 'ionic-angular';

// extração mensagem de erro do serviço
export function extraMessageError(response: any) {};

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
    HttpPluginsIonicModule,
    AuthenticationHttpModule.initialize()
  ],
  providers: [
    Storage,
    Providers,
    { provide: ThrowExceptionStatusToken, useValue: extraMessageError },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProviderEnv,
    { provide: Adapter, useClass: HttpAdapter }
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ]
})
export class AppModule {
}
