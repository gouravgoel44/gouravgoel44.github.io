import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
// import { HomeComponent } from './components/home/home.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/shared/snackbar/snackbar.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    TodoListComponent,
    TodoHeaderComponent,
    // HomeComponent,
    SplashScreenComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
