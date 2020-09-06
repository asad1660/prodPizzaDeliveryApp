import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

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

  }


  delete(i,p,q){
   this.cartList.splice(i,1);
   this.price=p*q;
   this.total=this.total-this.price;
  }
customerdetail(){
  localStorage.setItem("data",JSON.stringify(this.cartList));
  localStorage.setItem("total",JSON.stringify(this.total));

  this.router.navigate(["/customerdetail"]);
}

}
