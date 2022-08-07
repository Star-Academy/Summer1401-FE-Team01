import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../models/game.model';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    public ImageType = ImageType;

    @Input() public game!: Game;
    @Input() public currentIndex!: number;
}
