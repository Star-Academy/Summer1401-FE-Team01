import {Component, Input} from '@angular/core';
import {Game} from '../../models/game.model';
import {AuthService} from '../../services/auth.service';
import {UserBookmarkFavouriteService} from '../../services/user-bookmark-favourite.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input() public game!: Game;
    @Input() public currentIndex!: number;

    public constructor(
        private router: Router,
        private authService: AuthService,
        private userBookmarkFavouriteService: UserBookmarkFavouriteService
    ) {}

    public async openGamePage(): Promise<void> {
        await this.router.navigateByUrl('/game', {
            state: {game: this.game},
        });
    }

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
        return (this.userBookmarkFavouriteService.cachedBookmarkIds || []).includes(this.game.id);
    }

    public async removeFromBookmark(): Promise<void> {
        await this.userBookmarkFavouriteService.removeFromBookmarks(this.game.id);
    }

    public async addToBookmarks(): Promise<void> {
        await this.userBookmarkFavouriteService.addToBookmarks(this.game.id);
    }

    public get isInFavourites(): boolean {
        return (this.userBookmarkFavouriteService.cachedFaveIds || []).includes(this.game.id);
    }

    public async removeFromFavourites(): Promise<void> {
        await this.userBookmarkFavouriteService.removeFromFaves(this.game.id);
    }

    public async addToFavourites(): Promise<void> {
        await this.userBookmarkFavouriteService.addToFaves(this.game.id);
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
