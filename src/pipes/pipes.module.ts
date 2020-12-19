import {ModuleWithProviders, NgModule} from '@angular/core';
import {FilterPipe} from './filter/filter.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    FilterPipe,
  ],
  exports: [
    FilterPipe
  ],
})

export class PipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesModule,
    };
  }
}
