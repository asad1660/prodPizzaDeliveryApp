import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MainService {
   pizzas = [
    { id: 11, name: 'Mr. Nice', image: 'assets/1.png', price: 200, type: 'Cheese burst' },
    { id: 12, name: 'Narco', image: './assets/2.png', price: 300, type: 'Cheese burst' },
    { id: 13, name: 'Bombasto', image: 'assets/3.png', price: 200, type: 'Cheese burst' },
    { id: 14, name: 'Celeritas', image: 'assets/4.png', price: 300, type: 'Cheese burst'},
    { id: 15, name: 'Magneta', image: 'assets/5.png', price: 200, type: 'Cheese burst' },
    { id: 16, name: 'RubberMan', image: 'assets/6.png', price: 350, type: 'Cheese burst'},
    { id: 17, name: 'Dynama', image: 'assets/7.png', price: 150, type: 'No Cheese'},
    { id: 18, name: 'Dr IQ', image: 'assets/8.png', price: 400, type: 'Cheese burst'},
];

  constructor() { }
  get_Pizaalist(){
    return this.pizzas;
  }
}
