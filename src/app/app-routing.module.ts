import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  
  {path: 'list-page', component: ListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
