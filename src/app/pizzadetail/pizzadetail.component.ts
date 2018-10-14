import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {
  pizza: Pizza;
  constructor(private activateRoute: ActivatedRoute,private pizzaService: PizzaService) { }

  ngOnInit() {
      this.getPizza();
  }

  getPizza(){
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.PizzaByID(id)
          .subscribe(pizza => this.pizza = pizza);
    }

}