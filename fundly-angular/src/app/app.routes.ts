import { Route } from '@angular/router';
import { AUTH_PATHS, HOME_PATHS } from '@shared/constants/paths.constants';
import { MainLayoutComponent } from '@shared/layouts/main-layout/main-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: HOME_PATHS.HOME,
        loadChildren: async () =>
          import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
        data: { preload: true },
      },
      {
        path: AUTH_PATHS.BASE,
        loadChildren: async () =>
          import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
    ],
  },
];