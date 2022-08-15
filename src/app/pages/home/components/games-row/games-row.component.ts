import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';
import {Router} from '@angular/router';
import {GameService} from '../../../../services/game.service';
import {ImageType} from '../../../../enums/image-type.enum';

@Component({
    selector: 'app-games-row',
    templateUrl: './games-row.component.html',
    styleUrls: ['./games-row.component.scss'],
})
export class GamesRowComponent {
    @Input() public title!: string;
    @Input() public games!: Array<Game>;

    public ImageType = ImageType;

    public constructor(private router: Router, private gameService: GameService) {}

    public async openGamePage(game: Game): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: (await this.gameService.translateGameInfo([game]))[0]},
            queryParams: {id: game.id},
        });
    }
}
