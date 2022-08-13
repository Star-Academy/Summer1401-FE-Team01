import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../../../models/game.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-games-row',
    templateUrl: './games-row.component.html',
    styleUrls: ['./games-row.component.scss'],
})
export class GamesRowComponent {
    @Input() public title!: string;
    @Input() public games!: Array<Game>;

    public ImageType = ImageType;

    public constructor(private router: Router) {}

    public async openGamePage(game: Game): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: game},
            queryParams: {id: game.id},
        });
    }
}
