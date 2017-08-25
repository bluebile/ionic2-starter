import { OneSignal } from '@ionic-native/onesignal';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppVersion } from '@ionic-native/app-version';

export * from './mba.notification';
export * from './user';

export const ProvidersNative = [
  Diagnostic,
  Network,
  SplashScreen,
  StatusBar,
  OneSignal,
  AppVersion
];
