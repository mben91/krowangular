"use strict";
var router_1 = require('@angular/router');
var app_company_component_1 = require('./components/company/app.company.component');
var app_login_component_1 = require('./components/login/app.login.component');
exports.router = [
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: app_login_component_1.LoginComponent },
    { path: 'company', component: app_company_component_1.CompanyComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map