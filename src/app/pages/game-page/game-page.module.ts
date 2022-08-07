import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamePageComponent} from './game-page.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {BreadcrumbsModule} from '../../components/breadcrumbs/breadcrumbs.module';
import {CarouselItemModule} from '../../components/carousel-item/carousel-item.module';
import {RatingModule} from '../../components/rating/rating.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [GamePageComponent],
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