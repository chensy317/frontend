import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PizzadetailComponent} from './pizzadetail/pizzadetail.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {path: 'pizza', component: PizzaListComponent},
  {path: 'pizza/:id', component: PizzadetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }