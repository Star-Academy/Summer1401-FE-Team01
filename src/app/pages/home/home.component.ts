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
    public suggestionGames: Array<Game> = [];
    public popularGames: Array<Game> = [];
    public bestSellerGames: Array<Game> = [];

    public constructor(private router: Router, private gameService: GameService, private searchService: SearchService) {
        this.initGames().then();
    }

    public async initGames(): Promise<void> {
        this.suggestionGames = (await this.gameService.fetchSlideshowGames()) || [];

        this.searchService.searchPhrase = '';
        this.searchService.resetFilters();

        await this.searchService.search();
        this.popularGames = this.searchService.games;

        this.searchService.sort = Sort.BEST_SELLER;
        await this.searchService.search();
        this.bestSellerGames = this.searchService.games;

        this.searchService.resetFilters();
    }
}
