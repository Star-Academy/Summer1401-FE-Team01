import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../../../../services/search.service';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @Input() public searchPhrase: string = '';

    @Output() public searchPhraseChange = new EventEmitter<string>();

    public constructor(private router: Router, private searchService: SearchService) {}

    public async submitSearch(input: HTMLInputElement): Promise<void> {
        this.searchService.searchPhrase = this.searchPhrase;
        await this.router.navigateByUrl('/search');

        this.searchPhrase = '';
        this.searchPhraseChange.emit('');
        input.blur();
    }
}
