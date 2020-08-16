import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { PwaService } from 'src/app/services/pwa.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('toDoList') toDoList: TodoListComponent;

  constructor(public Pwa: PwaService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (this.Pwa.promptEvent) {
      let snackBarRef = this.snackBar.open('Add to Home Screen', 'Click');
      snackBarRef.onAction().subscribe(() => {
        this.installPwa();
      });
    }
  }

  onAddItem(item: string): void {
    this.toDoList.addItemToList(item);
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  onRefresh(): void {
    this.toDoList.refresh();
  }
}
