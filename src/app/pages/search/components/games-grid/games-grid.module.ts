import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesGridComponent} from './games-grid.component';
import {TomanModule} from '../../../../components/toman/toman.module';
import {PageNumberSelectorComponent} from './components/page-number-selector/page-number-selector.component';
import {RoundNumberToHalfPipe} from './pipes/round-number-to-half.pipe';
import {ButtonModule} from '../../../../components/button/button.module';
import {FaveBookmarkButtonsModule} from '../../../../components/fave-bookmark-buttons/fave-bookmark-buttons.module';
import {GamePageModule} from '../../../game-page/game-page.module';

@NgModule({
    declarations: [GamesGridComponent, PageNumberSelectorComponent, RoundNumberToHalfPipe],
    exports: [GamesGridComponent, RoundNumberToHalfPipe],
    imports: [CommonModule, TomanModule, ButtonModule, FaveBookmarkButtonsModule, GamePageModule],
    providers: [RoundNumberToHalfPipe],
})
export class GamesGridModule {}
