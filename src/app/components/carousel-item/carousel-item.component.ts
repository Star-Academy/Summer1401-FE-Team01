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

    public get sliderCoverImage(): string {
        if (!!this.game) {
            if (!!this.game.artworks && !!this.game.artworks[0] && !!this.game.artworks[0].id) {
                return `https://images.igdb.com/igdb/image/upload/t_1080p/${this.game.artworks[0].id}.jpg`;
            }

            if (!!this.game.screenshots && !!this.game.screenshots[0] && !!this.game.screenshots[0].id) {
                return `https://images.igdb.com/igdb/image/upload/t_1080p/${this.game.screenshots[0].id}.jpg`;
            }

            if (!!this.game.cover) {
                return `https://images.igdb.com/igdb/image/upload/t_1080p/${this.game.cover.id}.jpg`;
            }
        }
        return '';
    }
}
