import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../../../models/game.model';
import {Router} from '@angular/router';
import {UserBookmarkFavouriteService} from '../../../../services/user-bookmark-favourite.service';
import {GameService} from '../../../../services/game.service';

@Component({
    selector: 'app-games-row',
    templateUrl: './games-row.component.html',
    styleUrls: ['./games-row.component.scss'],
})
export class GamesRowComponent {
    @Input() public title!: string;
    @Input() public games!: Array<Game>;

    public ImageType = ImageType;

    public constructor(
        private router: Router,
        private gameService: GameService,
        private userBookmarkFavouriteService: UserBookmarkFavouriteService
    ) {}

    public async openGamePage(game: Game): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: (await this.gameService.translateGameInfo([game]))[0]},
            queryParams: {id: game.id},
        });
    }

    public isInBookmarks(game: Game): boolean {
        return (this.userBookmarkFavouriteService.cachedBookmarkIds || []).includes(game.id);
    }

    public async removeFromBookmark(game: Game, event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.removeFromBookmarks(game.id);
    }

    public async addToBookmarks(game: Game, event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.addToBookmarks(game.id);
    }

    public isInFavourites(game: Game): boolean {
        return (this.userBookmarkFavouriteService.cachedFaveIds || []).includes(game.id);
    }

    public async removeFromFavourites(game: Game, event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.removeFromFaves(game.id);
    }

    public async addToFavourites(game: Game, event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.addToFaves(game.id);
    }
}
