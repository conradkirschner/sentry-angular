import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from /* webpackChunkName: 'sentry' */'@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomErrorHandler} from './ErrorHandler';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
