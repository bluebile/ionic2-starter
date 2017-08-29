import { MyApp } from './app.component';
import { AppConfig } from './app.config';
import { DeviceInfo, Env, ProviderEnv } from './app.env';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { ConfigurationModule } from '@mbamobi/configuration';
import { DefaultPlugins, HttpModule, ThrowExceptionStatusToken } from '@mbamobi/http';
import { UrlResolverModule } from '@mbamobi/url-resolver';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpPluginsIonicModule } from '@mbamobi/http-plugins-ionic';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MbaNotificationProvider, ProvidersNative } from '../providers';
import { User } from '../providers/user';
import { MuralIonicModule } from '@mbamobi/mural-ionic';

// extração mensagem de erro do serviço
export function extraMessageError() {}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, AppConfig),
    IonicStorageModule.forRoot(),
    HttpPluginsIonicModule,
    TextMaskModule,
    ConfigurationModule.initialize(AppConfig, Env),
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins),
    HttpPluginsIonicModule,
    MuralIonicModule.forRoot()
  ],
  providers: [
    { provide: ThrowExceptionStatusToken, useValue: extraMessageError },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProviderEnv,
    DeviceInfo,
    ProvidersNative,
    MbaNotificationProvider,
    User
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule {
}
