import { Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full',
    },
    {
        path: 'login/callback',
        component: OktaCallbackComponent,
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'users-list',
        loadChildren: () =>
            import('./pages/users-list/users-list-module').then(m => m.UsersListModule),
        canActivate: [AuthGuard],
        data: {
            okta: { acrValues: 'urn:okta:loa:2fa:any' },
        },
    },
];
