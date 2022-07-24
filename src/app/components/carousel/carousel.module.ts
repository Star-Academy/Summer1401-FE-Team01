import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';

@NgModule({
    declarations: [CarouselComponent],
    imports: [CommonModule, CarouselItemModule],
    exports: [CarouselComponent],
})
export class CarouselModule {}
