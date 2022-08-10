import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpansionListComponent} from './expansion-list.component';

@NgModule({
    declarations: [ExpansionListComponent],
    imports: [CommonModule],
    exports: [ExpansionListComponent],
})
export class ExpansionListModule {}
