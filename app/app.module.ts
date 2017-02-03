import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CompanyComponent }  from './components/company/app.company.component';
import { LoginComponent }  from './components/login/app.login.component';

import { routes }  from './app.router';

@NgModule({
  imports:      [
      BrowserModule,
      routes
  ],
  declarations: [
      AppComponent,
      CompanyComponent,
      LoginComponent,
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
