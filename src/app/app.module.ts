import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/gad-home/gad-home.component';
import { GadShopComponent } from './components/gad-shop/gad-shop.component';
import { GadCarroComponent } from './components/gad-carro/gad-carro.component';
import { GadShopTableComponent } from './components/gad-shop-table/gad-shop-table.component';
import { GadDogFormComponent } from './components/gad-dog-form/gad-dog-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GadShopComponent,
    GadCarroComponent,
    GadShopTableComponent,
    GadDogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
