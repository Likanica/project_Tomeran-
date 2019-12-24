import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template:'<div>{{myDate| date:"dd/MM/yyyy"}}</div>',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  myDate = Date.now()
  pi: number = 3.1415
  Message: string = "Nasus Yasuo"
  constructor() { }

  ngOnInit() {
  }

}
