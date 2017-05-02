import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = '<u>Hello Kazuya!</u>';
  inputValue;

  @Output() addTodo = new EventEmitter<string>();

  inputPlaceholder = 'What needs to be done?';

  inputKeyUp() {

  }

  constructor() { }

  ngOnInit() {
  }

  someEvent($event) {
    console.log($event);
  }

  inputEnterKeyUp($event) {
    this.addTodo.emit(this.inputValue);
    this.inputValue = "";
    // console.log(this.inputValue);
  }
}
