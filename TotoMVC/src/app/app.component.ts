import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from "app/todo-item";
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'ToDos MVC App Works!';
  countleftItem = 0;
  items: TodoItem[];

  constructor(private todoService: TodoService, private http: Http) {

  }

  ngOnInit() {
    //方式應該在Services 運作
    // this.http.get('assets/data.json').subscribe(response => {
    //   // this.items = response.json();
    //   this.items = this.todoService.items =  response.json();
    // });
    // this.items = this.todoService.items;
    this.todoService.loadTodoItems().subscribe((response : Response) => {
      this.items = response.json();
    });
  }

  // countleftItme(){
  //   return this.items.filter(item => !item.done).length;
  // };
  // itemsCount = this.items.filter(item => !item.done).length;



  addTodoText(todoText) {
    this.todoService.addTodoText(todoText);
    this.items = this.todoService.items;
  }

  CountLeftItem($event) {
    console.log("app count", $event);
    this.countleftItem = $event;
  };
}


