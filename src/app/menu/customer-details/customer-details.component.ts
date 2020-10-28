import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
toggle=false;
cartList:any;
total:any;
customer_name;
customer_address;
customer_number;
  constructor(mainservice:MainService) {
    this.cartList=mainservice.getCartlist();
    console.log(mainservice.getCartlist());
   }

  ngOnInit(): void {
   console.log("yo",this.cartList);
  }
  bill(){
    if(this.toggle== false){
    this.total=this.total+ 20;
    this.toggle=true;}
    else{
      this.toggle=false;
    }
  }


}
