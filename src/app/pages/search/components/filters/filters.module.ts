import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './filters.component';
import {CarouselItemModule} from '../../../../components/carousel-item/carousel-item.module';
import {ExpansionListModule} from './components/expansion-list/expansion-list.module';
import {RangeInputModule} from '../../../../components/range-input/range-input.module';
import {ExpansionRangeModule} from './components/expansion-range/expansion-range.module';

@NgModule({
    declarations: [FiltersComponent],
    exports: [FiltersComponent],
    imports: [CommonModule, CarouselItemModule, ExpansionListModule, RangeInputModule, ExpansionRangeModule],
})
export class FiltersModule {}
