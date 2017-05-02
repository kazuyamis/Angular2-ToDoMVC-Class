import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoService } from "app/todo.service";


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodoItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
