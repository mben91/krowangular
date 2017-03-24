"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var pagenotfound_component_1 = require('./components/error/pagenotfound.component');
var app_company_component_1 = require('./components/company/app.company.component');
var app_login_component_1 = require('./components/login/app.login.component');
var app_signup_component_1 = require('./components/signup/app.signup.component');
var app_logout_component_1 = require('./components/logout/app.logout.component');
var auth_guard_1 = require('./components/auth/auth.guard');
exports.router = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: app_component_1.AppComponent },
    { path: 'login', component: app_login_component_1.LoginComponent },
    { path: 'signup', component: app_signup_component_1.SignUpComponent },
    { path: 'logout', component: app_logout_component_1.LogoutComponent },
    { path: 'company/list', component: app_company_component_1.CompanyComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map