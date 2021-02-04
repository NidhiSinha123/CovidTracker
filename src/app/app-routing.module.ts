import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './component/country/country.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
 { path:'' ,component:HomeComponent},
 { path:'countries' ,component:CountryComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
