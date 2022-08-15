import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselItemComponent} from './carousel-item.component';
import {FormsModule} from '@angular/forms';
import {FaveBookmarkButtonsModule} from '../fave-bookmark-buttons/fave-bookmark-buttons.module';
import {ButtonModule} from '../button/button.module';
import {GamePageModule} from '../../pages/game-page/game-page.module';
import {GamesGridModule} from '../../pages/search/components/games-grid/games-grid.module';

@NgModule({
    declarations: [CarouselItemComponent],
    exports: [CarouselItemComponent],
    imports: [CommonModule, FormsModule, FaveBookmarkButtonsModule, ButtonModule, GamePageModule, GamesGridModule],
})
export class CarouselItemModule {}
