import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamePageComponent} from './game-page.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {BreadcrumbsModule} from '../../components/breadcrumbs/breadcrumbs.module';
import {CarouselItemModule} from '../../components/carousel-item/carousel-item.module';
import {RatingModule} from '../../components/rating/rating.module';
import {RouterModule} from '@angular/router';
import {GameComponent} from './components/game/game.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {IncludePipe} from './pipes/include.pipe';

@NgModule({
    declarations: [GamePageComponent, GameComponent, SideMenuComponent, IncludePipe],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        BreadcrumbsModule,
        CarouselItemModule,
        RatingModule,
        RouterModule,
    ],
})
export class GamePageModule {}
