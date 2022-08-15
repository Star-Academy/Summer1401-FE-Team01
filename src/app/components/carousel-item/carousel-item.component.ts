import {Component, Input} from '@angular/core';
import {Game} from '../../models/game.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {ImageType} from '../../enums/image-type.enum';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input() public game!: Game;
    @Input() public currentIndex!: number;

    public constructor(private router: Router, public authService: AuthService, private gameService: GameService) {}

    public async openGamePage(): Promise<void> {
        await this.router.navigate(['/game'], {
            state: {game: (await this.gameService.translateGameInfo([this.game]))[0]},
            queryParams: {id: this.game.id},
        });
    }

    public get sliderCoverImage(): string {
        if (!this.game) return '';

        if (this.game.artworks && this.game.artworks[0]) {
            return this.game.artworks[0].getScreenShotUrl(ImageType.FULL_HD);
        }

        if (this.game.screenshots && this.game.screenshots[0]) {
            return this.game.screenshots[0].getScreenShotUrl(ImageType.FULL_HD);
        }

        if (this.game.cover) {
            return this.game.cover.getScreenShotUrl(ImageType.FULL_HD);
        }

        return '';
    }
}
