import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { Observable } from 'rxjs';
import { OrderService } from '../REST';
@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {
  public payPalConfig?: PayPalConfig;
  pizza: Pizza;

  constructor(private activateRoute: ActivatedRoute,private pizzaService: PizzaService) { }

  ngOnInit() {
      this.getPizza();
  }

  getPizza(){
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.PizzaByID(id)
          .subscribe(pizza =>{ this.pizza = pizza;this.initConfig()})
    }




    initConfig(): void {
        this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
          commit: true,
          client: {
            sandbox: 'AdKa_QEestqt9Uq5u0vELID2B_MsT1T95gAWJ1HLBsCKy1KLNMxgr4QKcdvKbKtBP4WEwjzvwe1wCKYT'
                     
          },
          button: {
            label: 'paypal',
          },
          onPaymentComplete: (data, actions) => {
            console.log(data,actions);
          },
          onCancel: (data, actions) => {
            console.log('OnCancel');
          },
          onError: (err) => {
            console.log('OnError');
          },
          transactions: [{
            amount: {
              currency: 'EUR',
              total: this.pizza.price
            }
          }]
        });
    }

}