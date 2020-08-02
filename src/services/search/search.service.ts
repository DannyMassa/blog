import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search: string;
  public subject = new Subject<string>();

  constructor() { }
}
