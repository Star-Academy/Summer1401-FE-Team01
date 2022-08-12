import {Component, Input} from '@angular/core';
import {SearchService} from '../../../../../../services/search.service';

@Component({
    selector: 'app-page-number-selector',
    templateUrl: './page-number-selector.component.html',
    styleUrls: ['./page-number-selector.component.scss'],
})
export class PageNumberSelectorComponent {
    @Input() public minPage!: number;
    @Input() public maxPage!: number;

    @Input() public currentPage!: number;
    @Input() public currentPageChange!: () => void;

    public constructor(private searchService: SearchService) {}

    public get pages(): Array<number> {
        return new Array(this.maxPage - this.minPage + 1)
            .fill(0)
            .map((_, i) => i + this.minPage)
            .filter((p) =>
                [this.minPage, this.maxPage, this.currentPage, this.currentPage + 1, this.currentPage - 1].includes(p)
            );
    }

    public setCurrentPage(page: number): void {
        this.searchService.pageNumber = page;
        this.currentPageChange();
        console.log(this.currentPage, this.searchService.offset);
    }
}
