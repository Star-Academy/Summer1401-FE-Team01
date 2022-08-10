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

    public onToggleItemSelect(index: number): void {
        this.items[index].toggle();

        // if item is selected, move item to top of list. otherwise, move it to end of list
        const itemsExcluding = this.items.filter((_, i) => i !== index);
        if (this.items[index].isSelected) {
            this.items = [this.items[index], ...itemsExcluding];
        } else {
            this.items = [...itemsExcluding, this.items[index]];
        }
    }
}
