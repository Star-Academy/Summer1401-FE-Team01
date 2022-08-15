import {AfterViewInit, Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';
import {Router} from '@angular/router';
import {UserBookmarkFavouriteService} from '../../../../services/user-bookmark-favourite.service';
import {GameService} from '../../../../services/game.service';
import {ImageType} from '../../../../enums/image-type.enum';

@Component({
    selector: 'app-games-grid',
    templateUrl: './games-grid.component.html',
    styleUrls: ['./games-grid.component.scss'],
})
export class GamesGridComponent implements AfterViewInit {
    @Input() public totalGameCount!: number;
    @Input() public games!: Array<Game>;

    @Input() public updateGamesCallback!: () => void;

    public multiPage = true;

    public ImageType = ImageType;

    public constructor(
        private router: Router,
        private gameService: GameService,
        private userBookmarkFavouriteService: UserBookmarkFavouriteService
    ) {}

    public async ngAfterViewInit(): Promise<void> {
        if (this.games) return;

        this.multiPage = false;
        switch (this.router.url) {
            case '/favourite':
                this.games = await this.userBookmarkFavouriteService.fetchAllFavourites();
                break;
            case '/bookmark':
                this.games = await this.userBookmarkFavouriteService.fetchAllBookmarks();
                break;
        }
    }

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
        const response = await this.userBookmarkFavouriteService.removeFromBookmarks(game.id);
        if (this.router.url == '/bookmark' && response) {
            this.games = this.games.filter((g) => g.id !== game.id);
        }
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
        const response = await this.userBookmarkFavouriteService.removeFromFaves(game.id);
        if (this.router.url == '/favourite' && response) {
            this.games = this.games.filter((g) => g.id !== game.id);
        }
    }

    public async addToFavourites(game: Game, event: MouseEvent): Promise<void> {
        event.stopPropagation();
        await this.userBookmarkFavouriteService.addToFaves(game.id);
    }
}
