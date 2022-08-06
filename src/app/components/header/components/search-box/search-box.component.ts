import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @Input() public searchPhrase: string = '';
    @Output() public searchPhraseChange = new EventEmitter<string>();

    public constructor(private router: Router) {}

    public async submitSearch(input: HTMLInputElement): Promise<void> {
        await this.router.navigateByUrl('/search', {state: {searchPhrase: this.searchPhrase}});

        this.searchPhrase = '';
        this.searchPhraseChange.emit('');
        input.blur();
    }
}
