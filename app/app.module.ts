import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
// used to create fake backend
// import { BackendProvider } from './helpers/backend';
// import { MockBackend } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './components/error/pagenotfound.component';
import { CompanyComponent }  from './components/company/app.company.component';
import { LoginComponent }  from './components/login/app.login.component';
import { SignUpComponent } from './components/signup/app.signup.component';
import { LogoutComponent } from './components/logout/app.logout.component';

import { routes }  from './app.router';

// guards
import { AuthGuard } from './components/auth/auth.guard';

// services
import { AuthenticationService, SignupService, UserService } from './services/user.auth.service';
import { SectorsService } from './services/sectors.service';

import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      routes
  ],
  declarations: [
      // Compoenents
      AppComponent,
      CompanyComponent,
      LoginComponent,
      SignUpComponent,
      LogoutComponent,
      PageNotFoundComponent,

      // Pipes
      KeysPipe
  ],
  providers: [
      AuthGuard,
      SignupService,
      AuthenticationService,
      UserService,
      SectorsService,

      // providers used to create fake backend
      // BackendProvider,
      // MockBackend,
      // BaseRequestOptions
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
