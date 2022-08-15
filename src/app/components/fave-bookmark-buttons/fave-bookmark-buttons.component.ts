import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Game} from '../../models/game.model';
import {UserBookmarkFavouriteService} from '../../services/user-bookmark-favourite.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-fave-bookmark-buttons',
    templateUrl: './fave-bookmark-buttons.component.html',
    styleUrls: ['./fave-bookmark-buttons.component.scss'],
})
export class FaveBookmarkButtonsComponent {
    @Input() public buttonTheme: 'text' | 'outline' | 'contained' = 'outline';

    @Input() public game!: Game;
    @Output() public gameChange = new EventEmitter<Game>();

    public constructor(private router: Router, private userBookmarkFavouriteService: UserBookmarkFavouriteService) {}

    public get isInBookmarks(): boolean {
        return (this.userBookmarkFavouriteService.cachedBookmarkIds || []).includes(this.game?.id || 0);
    }

    public get isInFavourites(): boolean {
        return (this.userBookmarkFavouriteService.cachedFaveIds || []).includes(this.game?.id || 0);
    }

    public async toggleBookmark(event: MouseEvent): Promise<void> {
        if (this.isInBookmarks) {
            const response = await this.removeFromBookmark(event);
            if (this.router.url === '/bookmark' && response) location.reload();
        } else {
            this.addToBookmarks(event).then();
        }
    }

    public async toggleFavourite(event: MouseEvent): Promise<void> {
        if (this.isInFavourites) {
            const response = await this.removeFromFavourites(event);
            if (this.router.url === '/favourite' && response) location.reload();
        } else {
            this.addToFavourites(event).then();
        }
    }

    public async removeFromBookmark(event: MouseEvent): Promise<boolean> {
        event.stopPropagation();
        return await this.userBookmarkFavouriteService.removeFromBookmarks(this.game.id);
    }

    public async addToBookmarks(event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.addToBookmarks(this.game.id);
    }

    public async removeFromFavourites(event: MouseEvent): Promise<boolean> {
        event.stopPropagation();
        return await this.userBookmarkFavouriteService.removeFromFaves(this.game.id);
    }

    public async addToFavourites(event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.addToFaves(this.game.id);
    }
}
