import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './filters.component';
import {ExpansionListModule} from './components/expansion-list/expansion-list.module';
import {ButtonModule} from '../../../../components/button/button.module';

@NgModule({
    declarations: [FiltersComponent],
    exports: [FiltersComponent],
    imports: [CommonModule, ExpansionListModule, ButtonModule],
})
export class FiltersModule {}
