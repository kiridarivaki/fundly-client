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
      }
    ],
  },
];