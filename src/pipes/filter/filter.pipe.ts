import { Pipe, PipeTransform } from '@angular/core';
import {ArticleMetadata} from '../../models/objects/article-metadata/article-metadata';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: ArticleMetadata[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.description.toLocaleLowerCase().includes(searchText) ||
        it.technologies.includes(searchText) ||
        it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
