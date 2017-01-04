import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TextMaskModule } from 'angular2-text-mask';
import { ConfigurationModule } from '@ramonornela/configuration';
import { UrlResolverModule } from '@ramonornela/url-resolver';
import { HttpModule, DefaultPlugins } from '@ramonornela/http';
import { HttpPluginsIonicModule } from '@ramonornela/http-plugins-ionic';
import { MyApp } from './app.component';
import { Pages } from '../pages/pages';
import { Providers } from '../providers/providers';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    MyApp,
    Pages
  ],
  providers: [
    Providers
  ],
  imports: [
    IonicModule.forRoot(MyApp, AppConfig),
    TextMaskModule,
    ConfigurationModule.initialize(AppConfig, 'dev'),
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins),
    HttpPluginsIonicModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ]
})
export class AppModule {
}
