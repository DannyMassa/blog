import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { AboutModule } from './about/about.module';
import {FormsModule} from '@angular/forms';
import {ArticleModule} from './article/article.module';
import {BlogModule} from './blog/blog.module';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutModule,
    ArticleModule,
    BlogModule,
    PipesModule.forRoot(),

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
