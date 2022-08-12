import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesGridComponent} from './games-grid.component';
import {TomanModule} from '../../../../components/toman/toman.module';
import {PageNumberSelectorComponent} from './components/page-number-selector/page-number-selector.component';
import {CarouselItemModule} from '../../../../components/carousel-item/carousel-item.module';

@NgModule({
    declarations: [GamesGridComponent, PageNumberSelectorComponent],
    exports: [GamesGridComponent],
    imports: [CommonModule, TomanModule, CarouselItemModule],
})
export class GamesGridModule {}
