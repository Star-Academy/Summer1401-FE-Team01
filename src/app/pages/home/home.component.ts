import {Component} from '@angular/core';
import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public suggestionGames: Array<Game> = [];

    public constructor(private gameService: GameService) {
        gameService.fetchSlideshowGames().then((games) => (this.suggestionGames = games || []));
    }
}
