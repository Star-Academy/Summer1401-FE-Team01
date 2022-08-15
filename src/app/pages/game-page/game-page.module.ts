import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamePageComponent} from './game-page.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {RatingModule} from '../../components/rating/rating.module';
import {RouterModule} from '@angular/router';
import {GameComponent} from './components/game/game.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {IncludePipe} from './pipes/include.pipe';
import {TomanModule} from '../../components/toman/toman.module';
import {ButtonModule} from '../../components/button/button.module';
import {FaveBookmarkButtonsModule} from '../../components/fave-bookmark-buttons/fave-bookmark-buttons.module';
import {ToPersianPipe} from './pipes/to-persian.pipe';
import {ImageUrlPipe} from '../../pipes/image-url.pipe';

@NgModule({
    declarations: [GamePageComponent, GameComponent, SideMenuComponent, IncludePipe, ToPersianPipe, ImageUrlPipe],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        RatingModule,
        RouterModule,
        TomanModule,
        ButtonModule,
        FaveBookmarkButtonsModule,
    ],
    exports: [ToPersianPipe, ImageUrlPipe],
    providers: [ToPersianPipe, ImageUrlPipe],
})
export class GamePageModule {}
