import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {GamesGridModule} from './components/games-grid/games-grid.module';
import {FiltersModule} from './components/filters/filters.module';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, GamesGridModule, FiltersModule],
})
export class SearchModule {}
