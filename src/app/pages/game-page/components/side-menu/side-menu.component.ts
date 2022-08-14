import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../../../models/game.model';
import {UserBookmarkFavouriteService} from '../../../../services/user-bookmark-favourite.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    @Input() public game!: Game;

    public ImageType = ImageType;

    public constructor(private userBookmarkFavouriteService: UserBookmarkFavouriteService) {}

    public get developerCompanies(): string {
        return this.game.developerCompanies.map((c) => c.name).join(', ');
    }

    public get publisherCompanies(): string {
        return this.game.publisherCompanies.map((c) => c.name).join(', ');
    }

    public get isInBookmarks(): boolean {
        return (this.userBookmarkFavouriteService.cachedBookmarkIds || []).includes(this.game.id);
    }

    public get isInFavourites(): boolean {
        return (this.userBookmarkFavouriteService.cachedFaveIds || []).includes(this.game.id);
    }

    public async removeFromBookmark(): Promise<void> {
        await this.userBookmarkFavouriteService.removeFromBookmarks(this.game.id);
    }

    public async addToBookmarks(): Promise<void> {
        await this.userBookmarkFavouriteService.addToBookmarks(this.game.id);
    }

    public async removeFromFavourites(): Promise<void> {
        await this.userBookmarkFavouriteService.removeFromFaves(this.game.id);
    }

    public async addToFavourites(): Promise<void> {
        await this.userBookmarkFavouriteService.addToFaves(this.game.id);
    }
}
