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
        await this.router.navigate(['/game'], {queryParams: {id: game.id}});
    }
}
