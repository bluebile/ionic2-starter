import { Pages } from '../pages/pages';
import { Providers, ProvidersNative } from '../providers/providers';
import { MyApp } from './app.component';
import { AppConfig } from './app.config';
import { Env, ProviderEnv } from './app.env';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { AuthenticationHttpModule } from '@mbamobi/authentication';
import { ConfigurationModule } from '@mbamobi/configuration';
import { DefaultPlugins, HttpModule, ThrowExceptionStatusToken } from '@mbamobi/http';
import { HttpPluginsIonicModule } from '@mbamobi/http-plugins-ionic';
import { UrlResolverModule } from '@mbamobi/url-resolver';
import { TextMaskModule } from 'angular2-text-mask';
import { IonicApp, IonicModule } from 'ionic-angular';

// extração mensagem de erro do serviço
export function extraMessageError() {};

@NgModule({
  declarations: [
    MyApp,
    Pages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, AppConfig),
    IonicStorageModule.forRoot(),
    TextMaskModule,
    ConfigurationModule.initialize(AppConfig, Env),
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins),
    HttpPluginsIonicModule
  ],
  providers: [
    Providers,
    { provide: ThrowExceptionStatusToken, useValue: extraMessageError },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProviderEnv,
    ProvidersNative
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ]
})
export class AppModule {
}
