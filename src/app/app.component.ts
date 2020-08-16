import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  constructor(private injector: Injector) {}

  ngOnInit() {
    let ele = createCustomElement(AddTodoItemComponent, {
      injector: this.injector,
    });
    customElements.define('custom-add-todo', ele);
  }
}
