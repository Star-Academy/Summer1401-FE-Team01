import {Component, Input} from '@angular/core';
import {ChecklistItem} from '../../../../models/checklist-item.model';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title!: string;
    @Input() public items!: Array<ChecklistItem>;

    public isExpanded: boolean = false;
}
