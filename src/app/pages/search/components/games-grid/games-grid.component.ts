import {Component, Input} from '@angular/core';
import {Game, ImageType} from '../../../../models/game.model';
import {Router} from '@angular/router';
import {UserBookmarkFavouriteService} from '../../../../services/user-bookmark-favourite.service';

@Component({
    selector: 'app-games-grid',
    templateUrl: './games-grid.component.html',
    styleUrls: ['./games-grid.component.scss'],
})
export class GamesGridComponent {
    @Input() public totalGameCount!: number;
    @Input() public games!: Array<Game>;

    @Input() public updateGamesCallback!: () => void;

    public multiPage = true;

    public ImageType = ImageType;

    public constructor(private router: Router, private userBookmarkFavouriteService: UserBookmarkFavouriteService) {
        if (!this.games) {
            this.fetchGames().then();
        }
    }

    public async openGamePage(game: Game): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: game},
            queryParams: {id: game.id},
        });
    }

    private async fetchGames(): Promise<void> {
        this.multiPage = false;
        switch (this.router.url) {
            case '/favourites':
                this.games = await this.userBookmarkFavouriteService.fetchAllFavourites();
                break;
            case '/bookmarks':
                this.games = await this.userBookmarkFavouriteService.fetchAllBookmarks();
                break;
        }
    }
}
