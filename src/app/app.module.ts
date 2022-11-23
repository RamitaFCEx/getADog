import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/gad-home/gad-home.component';
import { GadShopComponent } from './components/gad-shop/gad-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GadShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
