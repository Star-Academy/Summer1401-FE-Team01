import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../../../models/game.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-games-grid',
    templateUrl: './games-grid.component.html',
    styleUrls: ['./games-grid.component.scss'],
})
export class GamesGridComponent {
    @Input() public totalGameCount!: number;
    @Input() public games: Array<Game> = [];

    @Input() public updateGamesCallback!: () => void;

    public ImageType = ImageType;

    public constructor(private router: Router) {}

    public async openGamePage(game: Game): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: game},
            queryParams: {id: game.id},
        });
    }
}
