import {Component, Input} from '@angular/core';
import {Game} from '../../models/game.model';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input() public game!: Game;
    @Input() public currentIndex!: number;

    public constructor(private authService: AuthService) {}

    public get isLoggedIn(): boolean {
        return this.authService.cachedIsLoggedIn!;
    }

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

    public get isInBookmarks(): boolean {
        // todo
        return false;
    }

    public removeFromBookmark(): void {
        // todo
    }

    public addToBookmarks(): void {
        // todo
    }

    public get isInFavourites(): boolean {
        // todo
        return false;
    }

    public removeFromFavourites(): void {
        // todo
    }

    public addToFavourites(): void {
        // todo
    }

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
