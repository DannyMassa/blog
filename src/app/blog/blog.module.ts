import { NgModule } from '@angular/core';
import {BlogComponent} from './blog.component';
import {BlogCardModule} from './blog-card/blog-card.module';
import {PipesModule} from '../../pipes/pipes.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BlogCardModule,
    MatToolbarModule,
    PipesModule
  ],
  declarations: [
    BlogComponent,
  ]
})

export class BlogModule { }
