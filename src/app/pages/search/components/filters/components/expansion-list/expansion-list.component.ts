import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChecklistItem} from '../../../../models/checklist-item.model';
import {SearchService} from '../../../../../../services/search.service';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title!: string;

    @Input() public items!: Array<ChecklistItem>;
    @Output() public itemsChange = new EventEmitter<Array<ChecklistItem>>();

    public isExpanded: boolean = false;

    public constructor(private searchService: SearchService) {}

    public clearFilters(): void {
        this.searchService.clearFilters();
    }
}
