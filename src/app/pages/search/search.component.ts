import {Component} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public constructor(public searchService: SearchService) {
        this.searchService.search().then();
    }
}
