import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    MarkdownModule.forChild(),
  ],
  declarations: [
    ArticleComponent,
  ]
})

export class ArticleModule { }
