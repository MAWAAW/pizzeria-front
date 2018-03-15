import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PizzaService } from './shared/pizza/pizza.service';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GiphyService } from './shared/giphy/giphy.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/pizza-list', pathMatch: 'full' },
  {
    path: 'pizza-list',
    component: PizzaListComponent
  },
  {
    path: 'pizza-add',
    component: PizzaEditComponent
  },
  {
    path: 'pizza-edit/:code',
    component: PizzaEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PizzaService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
