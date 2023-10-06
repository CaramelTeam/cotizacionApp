import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { welcomeView } from './welcomeView/welcomeView';
import { CotizacionViewComponent } from './cotizacion-view/cotizacion-view.component';

@NgModule({
  declarations: [
    AppComponent,
    welcomeView,
    CotizacionViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
