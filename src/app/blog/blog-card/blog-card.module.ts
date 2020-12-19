import { NgModule } from '@angular/core';
import {BlogCardComponent} from './blog-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {PipesModule} from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    PipesModule,
  ],
  exports: [
    BlogCardComponent
  ],
  declarations: [
    BlogCardComponent,
  ]
})

export class BlogCardModule { }
