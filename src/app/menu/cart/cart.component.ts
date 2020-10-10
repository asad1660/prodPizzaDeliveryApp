import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  
  @Input() cartList:[];
  @Output() changess = new EventEmitter();
  total;
  constructor() { 
    
  }

  ngOnInit(): void {

  }

  delete(index){

    this.changess.emit(index);
  }
  ngOnChanges() {
   
}
}
