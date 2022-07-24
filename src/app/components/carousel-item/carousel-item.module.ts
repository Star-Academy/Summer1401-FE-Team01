import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselItemComponent} from './carousel-item.component';
import {FormsModule} from '@angular/forms';
import {ShinyButtonComponent} from '../shiny-button/shiny-button.component';

@NgModule({
    declarations: [CarouselItemComponent, ShinyButtonComponent],
    exports: [CarouselItemComponent, ShinyButtonComponent],
    imports: [CommonModule, FormsModule],
})
export class CarouselItemModule {}
