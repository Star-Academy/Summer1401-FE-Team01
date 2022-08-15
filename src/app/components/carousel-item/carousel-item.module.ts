import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselItemComponent} from './carousel-item.component';
import {FormsModule} from '@angular/forms';
import {FaveBookmarkButtonsModule} from '../fave-bookmark-buttons/fave-bookmark-buttons.module';
import {ButtonModule} from '../button/button.module';

@NgModule({
    declarations: [CarouselItemComponent],
    exports: [CarouselItemComponent],
    imports: [CommonModule, FormsModule, FaveBookmarkButtonsModule, ButtonModule],
})
export class CarouselItemModule {}
