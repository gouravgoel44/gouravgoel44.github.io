import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
})
export class AddTodoItemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addToDo(ev): void {
    if (this.onAddItem) {
      this.onAddItem.emit(ev.target.value);
      ev.target.value = '';
    }
  }
}
