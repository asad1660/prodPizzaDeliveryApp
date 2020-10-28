import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    localStorage.removeItem("data");
    localStorage.removeItem("total");
  }
  // @HostListener('window:hashchange', ['$event'])
  // hashChangeHandler(e) {
  //   window.onhashchange(e.alert("Sad"));
  // } 

}
