import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
toggle=false;
cartList:any;
total=0;
customer_name;
customer_address;
customer_number;
  constructor() { }

  ngOnInit(): void {
    this.cartList=JSON.parse(localStorage.getItem("data"));
    this.total=JSON.parse(localStorage.getItem("total"));
    this.total=this.total+ 20;
    console.log(this.cartList);
  }


}
