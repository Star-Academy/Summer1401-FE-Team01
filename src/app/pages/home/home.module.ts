import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesRowComponent} from './components/games-row/games-row.component';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';
import {RouterModule} from '@angular/router';
import {CarouselModule} from '../../components/carousel/carousel.module';
import {GamesGridModule} from '../search/components/games-grid/games-grid.module';
import {TomanModule} from '../../components/toman/toman.module';
import {CarouselItemModule} from '../../components/carousel-item/carousel-item.module';

@NgModule({
    declarations: [HomeComponent, GamesRowComponent],
    imports: [
        CommonModule,
        HeaderModule,
        RouterModule,
        CarouselModule,
        GamesGridModule,
        TomanModule,
        CarouselItemModule,
    ],
})
export class HomeModule {}
