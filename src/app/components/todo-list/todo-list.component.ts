import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  itemList: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    this.itemList = JSON.parse(localStorage.getItem('todoList'));
  }

  addItemToList(item: string): void {
    if (!this.itemList) {
      this.itemList = [];
    }
    let objItem = <Item>{
      id:
        this.itemList.length > 0
          ? this.itemList[this.itemList.length - 1].id + 1
          : 1,
      name: item,
      done: false,
      trash: false,
    };

    this.itemList.push(objItem);
    this.saveDataToLocalStorage();
  }

  deleteItem(id: Number): void {
    let indexToDelete = this.itemList.findIndex((x) => x.id == id);
    if (indexToDelete > -1) {
      this.itemList.splice(indexToDelete, 1);
      this.saveDataToLocalStorage();
    }
  }

  completeToDo(item: Item): void {
    item.done = !item.done;
    this.saveDataToLocalStorage();
  }

  saveDataToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.itemList));
  }

  refresh(): void {
    this.itemList = [];
    localStorage.clear();
  }
}
