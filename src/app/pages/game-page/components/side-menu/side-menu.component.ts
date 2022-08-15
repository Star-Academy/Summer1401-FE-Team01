import {Component, Input} from '@angular/core';
import {Game} from '../../../../models/game.model';
import {ImageType} from '../../../../enums/image-type.enum';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    @Input() public game!: Game;

    public ImageType = ImageType;

    public get developerCompanies(): string {
        return this.game.developerCompanies.map((c) => c.name).join(', ');
    }

    public get publisherCompanies(): string {
        return this.game.publisherCompanies.map((c) => c.name).join(', ');
    }
}
