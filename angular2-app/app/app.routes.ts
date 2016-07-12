import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];