import { Http } from '@angular/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { TodoItem } from "app/todo-item";

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  @Output() addTodo = new EventEmitter<string>();
  @Output() countItem = new EventEmitter<number>();

  inputValue;

  items: TodoItem[] = [
    // {
    //   id: 1,
    //   text: 'item 1',
    //   done: true
    // },
    // {
    //   id: 2,
    //   text: 'item 2',
    //   done: false
    // },
    // {
    //   id: 3,
    //   text: 'item 3',
    //   done: false
    // },
    // {
    //   id: 4,
    //   text: 'item 4',
    //   done: false
    // }
  ];

  loadTodoItems(){
    let request = this.http.get('assets/data.json');
    request.subscribe(response =>{
      this.items = response.json();
    });

    return request;
  }

  addTodoText($event) {
    this.items.push({
      id: this.items.length + 1,
      text: $event,
      done: false
    });
  }

  toggleItemEditing(item: TodoItem) {
    console.log(item.text);
    item.oldText = item.text;
    item.isEditing = !item.isEditing;
  };

  confirmItemEditing(item: TodoItem) {
    this.toggleItemEditing(item);
  };

  cancelItemEditing(item: TodoItem) {
    item.text = item.oldText;
    this.toggleItemEditing(item);
  };

  confirmItemChecking(item: TodoItem) {
    console.log(item.text, item.done);
    item.done = !item.done;
    console.log(item.done);
  };

  todoitems_CountLeftItme() {
    console.log("todo-Items", this.items.filter(item => !item.done).length);
    this.countItem.emit(this.items.filter(item => !item.done).length);
  };

  isChange(item: TodoItem){
    console.log("todo-items Change" , item.done);
    item.done = !item.done;
    this.todoitems_CountLeftItme();
  };
}
