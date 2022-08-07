import {Component} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Game} from '../../models/game.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public gameCount: number = 0;
    public games: Array<Game> = [];

    public constructor(private searchService: SearchService) {
        searchService.search().then((res) => {
            if (!!res) {
                this.gameCount = res?.first;
                this.games = res?.second;
            }
        });
    }
}
