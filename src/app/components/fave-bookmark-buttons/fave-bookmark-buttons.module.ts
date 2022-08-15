import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaveBookmarkButtonsComponent} from './fave-bookmark-buttons.component';
import {ToggleButtonModule} from '../toggle-button/toggle-button.module';

@NgModule({
    declarations: [FaveBookmarkButtonsComponent],
    imports: [CommonModule, ToggleButtonModule],
    exports: [FaveBookmarkButtonsComponent],
})
export class FaveBookmarkButtonsModule {}
