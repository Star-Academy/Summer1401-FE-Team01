import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';
import {SearchService} from '../../../../services/search.service';
import {ImageType} from '../../../../enums/image-type.enum';

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
