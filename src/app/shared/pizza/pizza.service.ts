import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PizzaService {

  public API = '//localhost:8080';
  public PIZZA_API = this.API + '/pizzas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/best-pizzas');
  }

  get(code: string) {
    return this.http.get(this.PIZZA_API + '/' + code);
  }

  save(pizza: any): Observable<any> {
    let result: Observable<Object>;
    if (pizza['href']) {
      result = this.http.put(pizza.href, pizza);
    } else {
      result = this.http.post(this.PIZZA_API, pizza);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
