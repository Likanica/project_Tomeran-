import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  entered: boolean;
  constructor() { }

  ngOnInit() {
    this.login = "Likanica";
    this.password ="Likanica2";
    this.entered =false;
  }
MakeLogin() {
  console.log(this.login)
  console.log(this.password)
  if (this.login == "Likanica" && this.password == "Likanica2") { 
  this.entered = true
  console.log("Вы вошли")
}
else if (this.login !== "Likanica" && this.password !== "Likanica2") {
  const pass = localStorage.getItem("password")
  const log = localStorage.getItem("login")
  if (pass == this.login && log == this.password) {
    this.entered = true
    console.log("Хорошо")
   }
  }
 }
}
