import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { LineData } from './lines/line-data.mock';

import { SharedModule } from '../shared/shared.module';

import { V2RoutingModule } from './v2-routing.module';
import { V2Component } from './v2.component';
import { ShellComponent } from './home/shell.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    V2RoutingModule,
    ,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(LineData, {
      delay: 1000,
      dataEncapsulation: false
    }),
    UserModule
  ],
  declarations: [V2Component, ShellComponent, MenuComponent, WelcomeComponent],
  bootstrap: [V2Component]
})
export class V2Module {}
