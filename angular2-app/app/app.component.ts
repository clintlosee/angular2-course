import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    precompile: [HomeComponent, UsersComponent, PostsComponent]
})

export class AppComponent { }