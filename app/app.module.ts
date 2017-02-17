import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { BackendProvider } from './helpers/backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { CompanyComponent }  from './components/company/app.company.component';
import { LoginComponent }  from './components/login/app.login.component';

import { routes }  from './app.router';

import { AuthGuard } from './components/auth/auth.guard';
import { AuthenticationService, UserService } from './services/user.auth.service';

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      routes
  ],
  declarations: [
      AppComponent,
      CompanyComponent,
      LoginComponent,
  ],
  providers: [
      AuthGuard,
      AuthenticationService,
      UserService,

      // providers used to create fake backend
      //BackendProvider,
      //MockBackend,
      //BaseRequestOptions
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
