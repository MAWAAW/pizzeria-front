import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../shared/pizza/pizza.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit, OnDestroy {

  pizza: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService,
    private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.pizzaService.get(code).subscribe((pizza: any) => {
          if (pizza) {
            this.pizza = pizza;
            this.pizza.href = pizza._links.self.href;
            this.giphyService.get(pizza.name).subscribe(url => pizza.giphyUrl = url);
          } else {
            console.log(`Pizza with code '${code}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/pizza-list']);
  }

  save(form: NgForm) {
    this.pizzaService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error))
  }

  remove(href) {
    this.pizzaService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error))
  }

}
