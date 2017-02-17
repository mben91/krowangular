import { ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/app.company.component';
import { LoginComponent } from './components/login/app.login.component';

import { AuthGuard } from './components/auth/auth.guard';

export const router:Routes = [
    // { path: '**', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'company', component: CompanyComponent, canActivate: [AuthGuard] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
