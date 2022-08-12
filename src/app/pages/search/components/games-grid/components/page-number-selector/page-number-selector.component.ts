import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-page-number-selector',
    templateUrl: './page-number-selector.component.html',
    styleUrls: ['./page-number-selector.component.scss'],
})
export class PageNumberSelectorComponent {
    @Input() public minPage!: number;
    @Input() public maxPage!: number;

    @Input() public currentPage!: number;
    @Output() public currentPageChange = new EventEmitter<number>();

    public get pages(): Array<number> {
        return new Array(this.maxPage - this.minPage + 1).fill(0).map((_, i) => i + this.minPage);
    }
}
