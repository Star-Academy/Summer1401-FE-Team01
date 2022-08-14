import {Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {ChecklistItem} from '../../../../models/checklist-item.model';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title!: string;
    @Input() public items!: Array<ChecklistItem>;

    @Output() public itemsChange = new EventEmitter<Array<ChecklistItem>>();

    @ViewChildren('item') public itemsUI!: QueryList<ElementRef>;

    public isExpanded: boolean = false;
    private readonly animationDuration = 200;

    public onToggleItemSelect(index: number): void {
        this.items[index].toggle();

        this.updateItemPositionWithAnimation(index);
    }

    private updateItemPositionWithAnimation(oldIndex: number): void {
        const itemFirst = this.itemsUI.get(oldIndex)?.nativeElement?.getBoundingClientRect();

        let newIndex;
        const itemsExcluding = this.items.filter((_, i) => i !== oldIndex);
        if (this.items[oldIndex].isSelected) {
            this.items = [this.items[oldIndex], ...itemsExcluding];
            newIndex = 0;
        } else {
            this.items = [...itemsExcluding, this.items[oldIndex]];
            newIndex = this.items.length - 1;
        }

        const itemLast = this.itemsUI.get(newIndex)!.nativeElement.getBoundingClientRect();

        const deltaY = itemFirst.top - itemLast.top;

        this.itemsUI
            .get(oldIndex)!
            .nativeElement.animate([{transform: `translateY(${deltaY}px)`}, {transform: `translateY(0)`}], {
                duration: this.animationDuration,
                easing: 'ease-in',
            });
    }
}
