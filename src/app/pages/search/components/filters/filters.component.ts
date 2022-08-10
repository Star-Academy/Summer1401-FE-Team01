import {Component, Input} from '@angular/core';
import {SearchService} from '../../../../services/search.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    @Input() public onFilterSubmit!: () => void;

    public constructor(public searchService: SearchService) {}
}
