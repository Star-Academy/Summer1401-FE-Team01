import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';

@Component({
    selector: 'app-games-grid',
    templateUrl: './games-grid.component.html',
    styleUrls: ['./games-grid.component.scss'],
})
export class GamesGridComponent {
    @Input() public games: Array<Game> = [];
}
