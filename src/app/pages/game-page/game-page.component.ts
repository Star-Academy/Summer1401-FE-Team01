import {Component} from '@angular/core';
import {GameService} from '../../services/game.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../../models/game.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
    public game!: Game;

    public constructor(
        public gameService: GameService,
        private router: Router,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) {
        this.setupGame();
    }

    public setupGame(): void {
        this.route.queryParams.subscribe(async ({id}) => {
            this.game = (await this.gameService.fetchGame(id))!;
            this.setupGameVideoUrls();
        });
    }

    private setupGameVideoUrls(): void {
        this.game.videos.forEach((video) => {
            const unsafeUrl = `https://www.youtube-nocookie.com/embed/${video.id}`;
            video.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
        });
    }
}
