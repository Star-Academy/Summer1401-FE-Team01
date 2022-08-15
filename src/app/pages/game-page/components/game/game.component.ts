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

    public toString(longNumber: number): string {
        if (longNumber >= 1e9) {
            return `${Math.trunc(longNumber / 1e9).toLocaleString()}B`;
        }
        if (longNumber >= 1e6) {
            return `${Math.trunc(longNumber / 1e6).toLocaleString()}M`;
        }
        if (longNumber >= 1_000) {
            return `${Math.trunc(longNumber / 1_000).toLocaleString()}K`;
        }
        return longNumber.toString();
    }
}
