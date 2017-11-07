import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLogged: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isUserLogged = localStorage.getItem("currentUser") != "";
  }

}
