import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../../../models/game.model';
import {SearchService} from '../../../../services/search.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    @Input() public game!: Game;

    public ImageType = ImageType;
    public Math = Math;

    public constructor(public searchService: SearchService) {}
}
