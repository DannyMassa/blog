import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: 'article/:url', component: ArticleComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
