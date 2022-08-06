import {Component} from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public static suggestionGamesStatic = [
        new Game(
            0,
            'Forspoken',
            'forspoken',
            'Forspoken یک بازی RPG اکشن است که سفر فری، یک جوان نیویورکی را دنبال می‌کند که به سرزمین زیبا و بی‌رحمانه آتیا منتقل می‌شود.',
            'assets/images/games/forspoken/horizontal.webp',
            9.6
        ),
        new Game(
            1,
            'God of War Ragnarök',
            'god-of-war',
            'پدر و پسر با هم باید با راگناروک قریب الوقوع - نسخه افسانه ای اسکاندیناوی آخرالزمان - روبرو شوند که با دشمنانی که در God of War ساخته بودند مانند فریا، دشمنان جدیدی مانند ثور، و همگی در حالی که کریتوس با طغیان طغیان پسرش و دانش او درگیر می شود، روبرو شوند. آترئوس واقعاً همینطور است.',
            'assets/images/games/god-of-war/horizontal.webp',
            9.3
        ),
        new Game(
            2,
            'Gotham Knights',
            'gotham-knights',
            'Gotham Knights یک بازی RPG جهان باز و اکشن است که در پویاترین و تعاملی ترین شهر گاتهام تا به حال اتفاق می افتد. پنج منطقه متمایز گاتهام را در بازی انفرادی یا با یک قهرمان دیگر گشت‌زنی کنید و هر جا که آن را پیدا کردید به فعالیت‌های مجرمانه بپردازید.',
            'assets/images/games/gotham-knights/horizontal.webp',
            8.7
        ),
        new Game(
            3,
            'Horizon Forbidden West',
            'horizon',
            'سرزمین‌های دور را کاوش کنید، با ماشین‌های بزرگ‌تر و الهام‌بخش‌تر مبارزه کنید، و با قبایل جدید شگفت‌انگیزی روبرو شوید که به دنیای آینده‌ای دور و پسا آخرالزمانی Horizon برمی‌گردید.',
            'assets/images/games/horizon/horizontal.webp',
            9.1
        ),
        new Game(
            4,
            'Stray',
            'stray',
            'Stray یک بازی ماجراجویی گربه سوم شخص است که در میان کوچه‌های پرنور نئون یک شهر سایبری در حال پوسیدگی و محیط‌های تیره زیر شکم آن قرار دارد.',
            'assets/images/games/stray/horizontal.webp',
            9.3
        ),
    ];

    public get suggestionGames(): Array<Game> {
        return HomeComponent.suggestionGamesStatic;
    }
}
