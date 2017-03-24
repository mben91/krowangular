import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/error/pagenotfound.component';
import { CompanyComponent } from './components/company/app.company.component';
import { LoginComponent } from './components/login/app.login.component';
import { SignUpComponent } from './components/signup/app.signup.component';
import { LogoutComponent } from './components/logout/app.logout.component';

import { AuthGuard } from './components/auth/auth.guard';

export const router: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'company/list', component: CompanyComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
