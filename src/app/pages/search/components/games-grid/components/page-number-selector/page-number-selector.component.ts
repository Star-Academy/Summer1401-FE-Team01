import {Component} from '@angular/core';
import {SearchService} from '../../../../../../services/search.service';

@Component({
    selector: 'app-page-number-selector',
    templateUrl: './page-number-selector.component.html',
    styleUrls: ['./page-number-selector.component.scss'],
})
export class PageNumberSelectorComponent {
    public constructor(public searchService: SearchService) {}

    public readonly minPage: number = 0;

    public get maxPage(): number {
        return Math.ceil(this.searchService.totalGameCount / this.searchService.pageSize);
    }

    public get pages(): Array<number> {
        return new Array(this.maxPage - this.minPage + 1)
            .fill(0)
            .map((_, i) => i + this.minPage)
            .filter((p) =>
                [
                    this.minPage,
                    this.maxPage,
                    this.searchService.pageNumber,
                    this.searchService.pageNumber + 1,
                    this.searchService.pageNumber - 1,
                ].includes(p)
            );
    }

    public async setCurrentPage(page: number): Promise<void> {
        this.searchService.pageNumber = page;
        await this.searchService.search();
        document.documentElement.scrollTop = 0;
    }

    public prevPage(): void {
        this.setCurrentPage(this.searchService.pageNumber - 1).then();
    }

    public nextPage(): void {
        this.setCurrentPage(this.searchService.pageNumber + 1).then();
    }
}
