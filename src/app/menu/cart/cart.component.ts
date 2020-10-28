import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
 
  
  @Input() cartList:[];
  @Input() total:any;
  @Output() changess = new EventEmitter();
  router:Router;
  mainservice:MainService;
  
  
  
  constructor() { 
    
  }

  ngOnInit(): void {

  }

  delete(index){
    this.changess.emit(index);
  }
  customerdetail(){
    console.log(this.cartList);
    this.mainservice.setCartlist(this.cartList);
  }
  ngOnChanges() {
   console.log(this.cartList);
  
   
   
}
}
