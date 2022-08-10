import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './filters.component';
import {CarouselItemModule} from '../../../../components/carousel-item/carousel-item.module';
import {ExpansionListModule} from './components/expansion-list/expansion-list.module';

@NgModule({
    declarations: [FiltersComponent],
    exports: [FiltersComponent],
    imports: [CommonModule, CarouselItemModule, ExpansionListModule],
})
export class FiltersModule {}
