import {Component, Input} from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input() public game!: Game;
    @Input() public currentIndex!: number;

    public get gameCoverImage(): string {
        return `https://images.igdb.com/igdb/image/upload/t_1080p/${this.game.cover?.id}.jpg`;
    }
}
