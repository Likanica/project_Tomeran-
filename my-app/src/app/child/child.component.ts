import { EventEmitter, Component, Output, Input, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit{
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased){
    this.onChanged.emit(increased);
  }
  @Input() UserName: string;
  @Output() UserNameChange = new EventEmitter<string>();
  onNameChange(newName:string){
    this.UserName = newName;
    this.UserNameChange.emit(newName);
  }
  @Input() name: string;
  count:number=1;
   
  ngDoCheck() {
     
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
     
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
     
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
     
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
     
    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
      console.log(this.count + ". " + msg);
      this.count++;
  }
}
