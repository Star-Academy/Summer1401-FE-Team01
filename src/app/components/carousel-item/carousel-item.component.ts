import {Component, Input} from '@angular/core';
import {Game} from '../../models/game.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ImageType} from '../../enums/image-type.enum';
import {ImageUrlPipe} from '../../pipes/image-url.pipe';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input() public game!: Game;
    @Input() public currentIndex!: number;

    public constructor(public authService: AuthService, private router: Router, private imageUrlPipe: ImageUrlPipe) {}

    public async openGamePage(): Promise<void> {
        await this.router.navigate(['/game'], {queryParams: {id: this.game.id}});
    }

    public get sliderCoverImage(): string {
        if (!this.game) return '';

        if (this.game.artworks && this.game.artworks[0]) {
            return this.imageUrlPipe.transform(this.game.artworks[0], ImageType.FULL_HD);
        }

        if (this.game.screenshots && this.game.screenshots[0]) {
            return this.imageUrlPipe.transform(this.game.screenshots[0], ImageType.FULL_HD);
        }

        if (this.game.cover) {
            return this.imageUrlPipe.transform(this.game.cover, ImageType.FULL_HD);
        }

        return '';
    }
}
