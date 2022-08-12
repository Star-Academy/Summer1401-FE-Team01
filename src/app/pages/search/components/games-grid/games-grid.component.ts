import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-games-grid',
    templateUrl: './games-grid.component.html',
    styleUrls: ['./games-grid.component.scss'],
})
export class GamesGridComponent {
    @Input() public games: Array<Game> = [];

    public constructor(private router: Router) {}

    public gameSalePercentage(game: Game): number | null {
        if (game.price === game.priceOnSale) return null;

        return 100 - Math.floor((game.priceOnSale / game.price) * 100);
    }

    public async openGamePage(game: Game): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: game},
            queryParams: {id: game.id},
        });
    }
}
