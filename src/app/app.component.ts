import { Component, OnInit, ViewChild } from '@angular/core';
import { PwaService } from 'src/app/services/pwa.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('toDoList') toDoList: TodoListComponent;

  showSplash = true;

  constructor(public Pwa: PwaService) {}

  onAddItem(item: string): void {
    this.toDoList.addItemToList(item);
  }

  onRefresh(): void {
    this.toDoList.refresh();
  }

  ngOnInit() {}

  hideSplash() {
    this.showSplash = false;
  }
}
