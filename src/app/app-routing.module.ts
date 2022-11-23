import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/gad-home/gad-home.component';
import { GadShopComponent } from './components/gad-shop/gad-shop.component';

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: GadShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
 