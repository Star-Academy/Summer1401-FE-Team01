import {Component} from '@angular/core';
import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {Sort} from '../../enums/sort.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public upcomingGames: Array<Game> = [];
    public popularGames: Array<Game> = [];
    public bestSellerGames: Array<Game> = [];

    public constructor(private router: Router, private gameService: GameService, private searchService: SearchService) {
        this.initGames().then();
    }

    public async initGames(): Promise<void> {
        this.searchService.searchPhrase = '';
        this.searchService.resetFilters();

        Promise.all([
            this.gameService.fetchSlideshowGames().then((games) => (this.upcomingGames = games || [])),

            Promise.resolve().then(async () => {
                this.searchService.sort = Sort.POPULAR;
                this.popularGames = await this.searchService.search();
            }),

            Promise.resolve().then(async () => {
                this.searchService.sort = Sort.BEST_SELLER;
                this.bestSellerGames = await this.searchService.search();
            }),
        ]).then(() => {
            this.searchService.resetFilters();
        });
    }
}
