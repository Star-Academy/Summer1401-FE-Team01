import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    @Input() public game!: Game;

    public toDateTime(): string {
        let t = new Date();
        t.setTime(this.game.releaseDate * 1000);
        return t.toLocaleString();
    }
}
