import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public searchPhrase: string = '';

    public constructor(private router: Router) {
        this.searchPhrase = this.router.getCurrentNavigation()?.extras.state?.searchPhrase;
    }
}
