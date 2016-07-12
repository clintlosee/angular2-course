"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var users_component_1 = require('./users.component');
var posts_component_1 = require('./posts.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: '**', redirectTo: '' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map