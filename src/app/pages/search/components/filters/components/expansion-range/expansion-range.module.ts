import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpansionRangeComponent} from './expansion-range.component';
import {InputModule} from '../../../../../../components/input/input.module';
import {RangeInputModule} from '../../../../../../components/range-input/range-input.module';

@NgModule({
    declarations: [ExpansionRangeComponent],
    imports: [CommonModule, InputModule, RangeInputModule],
    exports: [ExpansionRangeComponent],
})
export class ExpansionRangeModule {}
