import { ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/app.company.component';
import { LoginComponent } from './components/login/app.login.component';


export const router:Routes = [
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'company', component: CompanyComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
