import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/pizza/pizza.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Array<any>;

  constructor(private pizzaService: PizzaService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.pizzaService.getAll().subscribe(data => {
      this.pizzas = data;
      for (const pizza of this.pizzas) {
        this.giphyService.get(pizza.name).subscribe(url => pizza.giphyUrl = url);
      }
    });
  }

}
