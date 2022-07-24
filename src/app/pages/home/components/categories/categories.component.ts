import {Component} from '@angular/core';

interface Category {
    title: string;
    link: string;
    image: string;
}

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    public categories: Category[] = [
        {
            title: 'Red Dead Redemption II',
            link: 'red-dead-redemption',
            image: 'assets/images/Red-dead-redemption.webp',
        },
        {
            title: 'Last Of Us II',
            link: 'Last-of-us',
            image: 'assets/images/last-of-us.webp',
        },
        {
            title: 'God Of War',
            link: 'God-Of-War',
            image: 'assets/images/God-of-war.webp',
        },
        {
            title: 'Hitman III',
            link: 'hitman-3',
            image: 'assets/images/Hitman-3.webp',
        },
    ];
}
