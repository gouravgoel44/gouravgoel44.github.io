import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent implements OnInit {
  @Output() onRefresh: EventEmitter<void> = new EventEmitter<void>();

  currentDate: string;
  constructor() {}

  ngOnInit(): void {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date();
    this.currentDate = today.toLocaleDateString('en-US', options);
  }

  clearLocalStorage(): void {
    if (this.onRefresh) {
      this.onRefresh.emit();
    }
  }
}
