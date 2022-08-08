import {Component} from '@angular/core';
import {Breadcrumb} from '../../components/breadcrumbs/models/breadcrumbs.model';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {Game} from '../../models/game.model';

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
    public constructor(private router: Router, public gameService: GameService) {
        this.game = router.getCurrentNavigation()?.extras?.state?.game;
        console.log(this.game);
    }
}
