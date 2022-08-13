import {Component} from '@angular/core';

interface Category {
    title: string;
    link: string;
    image: string;
    price: number;
    rating: number;
    description: string;
}

@Component({
    selector: 'app-games-row',
    templateUrl: './games-row.component.html',
    styleUrls: ['./games-row.component.scss'],
})
export class GamesRowComponent {
    public categories: Category[] = [
        {
            title: 'Red Dead Redemption II',
            link: 'red-dead-redemption',
            image: 'assets/images/Red-dead-redemption.webp',
            price: 250_000,
            rating: 9.8,
            description:
                'آمریکا، 1899. پایان دوران غرب وحشی آغاز شده است زیرا قانونگذاران آخرین باندهای قانون شکن باقی مانده را شکار می کنند. کسانی که تسلیم نمی شوند یا تسلیم نمی شوند کشته می شوند.',
        },
        {
            title: 'Last Of Us II',
            link: 'Last-of-us',
            image: 'assets/images/last-of-us.webp',
            price: 300_000,
            rating: 8.5,
            description:
                'پنج سال پس از سفر خطرناک خود در سراسر ایالات متحده پس از همه گیری، الی و جوئل در جکسون، وایومینگ ساکن شده اند. زندگی در میان جامعه‌ای پر رونق از بازماندگان، به‌رغم تهدید دائمی مبتلایان و سایر بازماندگان ناامیدتر، به آنها اجازه صلح و ثبات داده است.',
        },
        {
            title: 'God Of War',
            link: 'God-Of-War',
            image: 'assets/images/God-of-war.webp',
            price: 450_000,
            rating: 9.6,
            description:
                'کریتوس دوباره پدر شد. به عنوان مربی و محافظ آترئوس، پسری که مصمم است احترام خود را به دست آورد، او مجبور می شود در حالی که در دنیایی بسیار خطرناک با پسرش زندگی می کند، با خشمی که مدت هاست او را تعریف کرده است کنار بیاید و کنترل کند.',
        },
        {
            title: 'Hitman III',
            link: 'hitman-3',
            image: 'assets/images/Hitman-3.webp',
            price: 600_000,
            rating: 9.7,
            description:
                'از مکان‌های عجیب و غریب، با جزئیات دقیق مملو از فرصت‌های خلاقانه دیدن کنید - دنیای بازی لمسی و همه‌جانبه که انتخاب و قابلیت پخش بی‌نظیر بازیکن را ارائه می‌دهد.',
        },
    ];
}
