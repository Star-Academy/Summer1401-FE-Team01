import {Component} from '@angular/core';
import {Breadcrumb} from '../../components/breadcrumbs/models/breadcrumbs.model';
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

    public breadcrumbs: Breadcrumb[] = [
        {title: 'فروشگاه اینترنتی D&D', url: '/'},
        {title: 'بازی‌های پرطرفدار', url: '#'},
        {title: 'بازی های تفنگی', url: '#'},
    ];

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        public gameService: GameService,
        private sanitizer: DomSanitizer
    ) {
        this.game = router.getCurrentNavigation()?.extras?.state?.game;
        if (!!this.game) {
            this.setupGameVideoUrls();
        } else {
            route.queryParams.subscribe(async ({id}) => {
                this.game = (await gameService.fetchGame(id))!;
                this.setupGameVideoUrls();
            });
        }
    }

    private setupGameVideoUrls(): void {
        for (let i = 0; i < this.game.videos.length; i++) {
            const video = this.game.videos[i];
            const unsafeUrl = `https://www.youtube-nocookie.com/embed/${video.id}`;
            video.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
        }
    }
}
