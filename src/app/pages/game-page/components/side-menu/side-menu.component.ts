import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    @Input() public game!: Game;

    public get developerCompanies(): string {
        return this.game.involvedCompanies
            .filter((c) => c.developer)
            .map((c) => c.company.name)
            .join(', ');
    }

    public get publisherCompanies(): string {
        return this.game.involvedCompanies
            .filter((c) => c.publisher)
            .map((c) => c.company.name)
            .join(', ');
    }

    public get gameReleaseDate(): string {
        const date = new Date(this.game.releaseDate);
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    }
}
