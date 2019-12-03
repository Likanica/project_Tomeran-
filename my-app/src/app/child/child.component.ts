import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  name="Quesza"
  @Input() userName : string;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(newName: string){
    this.userName = newName;
    this.userNameChange.emit(newName);
  }
  }


