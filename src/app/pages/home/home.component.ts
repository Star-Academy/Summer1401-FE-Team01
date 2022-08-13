import {Component} from '@angular/core';
import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public suggestionGames: Array<Game> = [];
    public popularGames: Array<Game> = [];

    public constructor(private router: Router, private gameService: GameService, private searchService: SearchService) {
        gameService.fetchSlideshowGames().then((games) => (this.suggestionGames = games || []));

        searchService.searchPhrase = '';
        searchService.resetFilters();
        searchService.search().then(() => {
            searchService.resetFilters();
            this.popularGames = searchService.games;
        });
    }
}
