import { ErroConectividadePage } from './erro/erro-conectividade/erro-conectividade';
import { CardPage, HomePage, UserListPage } from './home';
import { LoginPage } from './login/login';
import { OnboardPage } from './onboard/onboard';
import { ProfilePage } from './profile/profile';
import { RecoveryPasswordPage } from './recovery-password/recovery-password';
import { TermoPage } from './termo/termo';
import { UserDetailPage } from './user-detail/user-detail';

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
    UserListPage,
    CardPage,
    ProfilePage,
    RecoveryPasswordPage,
    UserDetailPage

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
    UserListPage,
    CardPage,
    ProfilePage,
    RecoveryPasswordPage,
    UserDetailPage
};
