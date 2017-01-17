import { ErroConectividadePage } from './erro/erro-conectividade/erro-conectividade';
import { HomePage } from './home/home';
import { LoginPage } from './login/login';
import { TermoPage } from './termo/termo';
import { OnboardPage } from './onboard/onboard';

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
  OnboardPage
];

export const Home = HomePage;
export const Login = LoginPage;
export const Termo = TermoPage;
export const Onboard = OnboardPage;

export {
  HomePage,
  LoginPage,
  TermoPage,
  ErroConectividadePage,
  OnboardPage
};
