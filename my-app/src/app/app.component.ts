import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name:string;
  clicks:number = 0;
  onChanged(increased){
    console.log('Вы вошли в ngOnChanged')
    if(increased){
      this.clicks = this.clicks + 1;
    }
    else{
      this.clicks = this.clicks - 1;
    }
  }
  ngOnInit() { 
    console.log('Вы в ngOnInit')
  }
  
}
