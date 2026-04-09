import { Route } from '@angular/router';
import { AUTH_PATHS } from '@shared/constants/paths.constants';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const AUTH_ROUTES: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: AUTH_PATHS.LOGIN },
    { path: AUTH_PATHS.REGISTER, component: RegisterComponent },
    { path: AUTH_PATHS.LOGIN, component: LoginComponent }
];