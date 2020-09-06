import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pizzaList:any;
  cartList:any=[];
  quantity=0;
  total=0;
  price=0;

  
  constructor(mainservice:MainService,private router: Router){
   this.pizzaList=mainservice.get_Pizaalist();
   console.log(this.pizzaList);
  }
  ngOnInit() {
   localStorage.removeItem("data");
   localStorage.removeItem("total");
  }
  addquantity(e){
    if(e.target.value < 0){
      e.target.value=0;
    }
  }
  addToCart(pizza,p,q)
  {

    if(q>0 ){
     this.price=p * q; 
    this.total=this.total+this.price;
    this.cartList.push(pizza); 
    }
    else{
      alert("Please Quantity");
    }

    console.log(this.cartList);
  }


  delete(i,p,q){
    console.log(i);
   this.cartList.splice(i,1);
   this.price=p*q;
   this.total=this.total-this.price;
    console.log(this.cartList);
  }
customerdetail(){
  localStorage.setItem("data",JSON.stringify(this.cartList));
  localStorage.setItem("total",JSON.stringify(this.total));

  this.router.navigate(["/customerdetail"]);
}

}
