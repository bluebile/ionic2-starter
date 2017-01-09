import { HomePage } from './home/home';
import { LoginPage } from './login/login';
/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
export const Pages: any[] = [
  HomePage,
  LoginPage
];

export const Home = HomePage;
export const Login = LoginPage;
