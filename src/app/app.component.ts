import { Component } from '@angular/core';
import { Pizza } from 'src/app/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzaParent: Array<Pizza> = [
    {name: "reine", price: 10, url: "https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg"},
    {name: "marguerite", price: 12, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/280px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"}
  ]
  

}
