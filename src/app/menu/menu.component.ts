import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  form ;

  
  constructor(mainservice:MainService,private router: Router,form: FormBuilder){
   this.pizzaList=mainservice.get_Pizaalist();
   console.log(this.pizzaList);
   this.form = new FormGroup({
    number: new FormControl(),
  });
  }
  ngOnInit() {
   localStorage.removeItem("data");
   localStorage.removeItem("total");
  }
  addquantity(e){
    if(e.target.value < 0){
      e.target.value=0;
    }
    else{
      this.quantity=e.target.value;
      
      
    }
  }
  addToCart(pizza,p)
  {
    let obj={
      id:pizza.id, 
      name: pizza.name, 
      image: pizza.image,
       price:pizza.price, 
       type: pizza.type,
       quantity:Number(this.quantity)
    }
    if(this.quantity>0){
      let res;
     res=this.cartList.findIndex(x => x.id === pizza.id);
     if(res === -1)
     {
       this.cartList.push(obj);
      //  console.log("res a",res)
   
     }
     else{
       this.cartList.splice(res,1,obj)
      //  console.log("res a",res)
      //  console.log(obj);
     
     }
       
  

    }
    else{
      alert("Please add Quantity");
    }
    this.billCalculate();
  }
billCalculate(){
  
this.cartList.map(x=>{
  let bill=0;
  bill=Number(x.price) * x.quantity;
  this.total=this.total + bill;
  
})
console.log(this.total); 
}

  delete(i){

   this.cartList.splice(i,1);
  }
customerdetail(){
  localStorage.setItem("data",JSON.stringify(this.cartList));
  localStorage.setItem("total",JSON.stringify(this.total));

  this.router.navigate(["/customerdetail"]);
}

}
