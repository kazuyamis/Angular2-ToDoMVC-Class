import { TodoItem } from 'app/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from "app/todo.service";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})

export class TodoItemsComponent implements OnInit {

  countLfetItem = 0;

  // 類似C# namespace
  @Input() todoitems: TodoItem[];

  @Output() countItem = new EventEmitter<number>();

  constructor(private todoSerivce : TodoService) {

  }

  ngOnInit() {
    this.todoitems_CountLeftItme();
  }

  toggleItemEditing(item: TodoItem) {
    // console.log(item.text);
    // item.oldText = item.text;
    // item.isEditing = !item.isEditing;
    this.todoSerivce.toggleItemEditing(item);

  };

  confirmItemEditing(item: TodoItem) {
     this.todoSerivce.toggleItemEditing(item);
  };

  cancelItemEditing(item: TodoItem) {
    // item.text = item.oldText;
    // this.toggleItemEditing(item);
     this.todoSerivce.toggleItemEditing(item);
  };

  confirmItemChecking(item: TodoItem) {
    // console.log(item.text, item.done);
    // item.done = !item.done;
    // console.log(item.done);
    this.todoSerivce.confirmItemChecking(item);
  };

  todoitems_CountLeftItme() {
    // console.log("todo-Items", this.todoitems.filter(item => !item.done).length);
    // this.countItem.emit(this.todoitems.filter(item => !item.done).length);
    this.todoSerivce.todoitems_CountLeftItme();
  }

  isChange(item: TodoItem){
    // console.log("todo-items Change" , item.done);
    // item.done = !item.done;
    // this.todoitems_CountLeftItme();

    this.todoSerivce.isChange(item);
  };
}
