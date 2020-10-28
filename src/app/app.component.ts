import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 array=[1,2,4,2,7,2,6,6];
 string="this is a string,thsi is a string"
 
  
  constructor(){
 
  }

  ngOnInit() {
  }


}
