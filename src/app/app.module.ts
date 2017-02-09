import { Pages } from '../pages/pages';
import { Providers } from '../providers/providers';
import { MyApp } from './app.component';
import { AppConfig } from './app.config';
import { Env, ProviderEnv } from './app.env';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthenticationHttpModule } from '@mbamobi/authentication';
import { ConfigurationModule } from '@mbamobi/configuration';
import { DefaultPlugins, HttpModule, ThrowExceptionStatusToken } from '@mbamobi/http';
import { HttpPluginsIonicModule } from '@mbamobi/http-plugins-ionic';
import { UrlResolverModule } from '@mbamobi/url-resolver';
import { TextMaskModule } from 'angular2-text-mask';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { COMPONENTS } from '../components/index';
import { MaskFix } from '../directives/input-mask-fix';

// extração mensagem de erro do serviço
export function extraMessageError() {};

@NgModule({
  declarations: [
    MyApp,
    COMPONENTS,
    Pages
  ],
  imports: [
    IonicModule.forRoot(MyApp, AppConfig),
    TextMaskModule,
    ConfigurationModule.initialize(AppConfig, Env),
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins),
    HttpPluginsIonicModule,
    AuthenticationHttpModule.initialize(),
    MaskFix
  ],
  providers: [
    Storage,
    Providers,
    { provide: ThrowExceptionStatusToken, useValue: extraMessageError },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProviderEnv
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ]
})
export class AppModule {
}
