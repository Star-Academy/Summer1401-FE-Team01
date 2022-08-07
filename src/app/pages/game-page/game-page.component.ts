import {Component} from '@angular/core';
import {Breadcrumb} from '../../components/breadcrumbs/models/breadcrumbs.model';

@Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
    public breadcrumbs: Breadcrumb[] = [
        {title: 'فروشگاه اینترنتی D&D', url: '/'},
        {title: 'بازی‌های پرطرفدار', url: '#'},
        {title: 'بازی های تفنگی', url: '#'},
    ];
}
