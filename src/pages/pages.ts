import { CardPage } from './card/card';
import { ErroConectividadePage } from './erro/erro-conectividade/erro-conectividade';
import { HomePage } from './home/home';
import { ListPage } from './list/list';
import { LoginPage } from './login/login';
import { OnboardPage } from './onboard/onboard';
import { ProfilePage } from './profile/profile';
import { RecoveryPasswordPage } from './recoveryPassword/recoveryPassword';
import { TermoPage } from './termo/termo';

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
export const Pages: any[] = [
  HomePage,
  LoginPage,
  TermoPage,
  ErroConectividadePage,
  OnboardPage,
  ListPage,
  CardPage,
  ProfilePage,
  RecoveryPasswordPage
];

export const Home = HomePage;
export const Login = LoginPage;
export const Termo = TermoPage;
export const Onboard = OnboardPage;

export * from './onboard/onboard';
export * from './termo/termo';

export {
  HomePage,
  LoginPage,
  ErroConectividadePage,
  ListPage,
  CardPage,
  ProfilePage,
  RecoveryPasswordPage
};
