import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {Game} from '../../models/game';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    @Input() public games: Array<Game> = [];

    public slideTimeout: number = 4000;
    public currentIndex = 0;

    private autoNextInterval!: number | null;

    public ngAfterViewInit(): void {
        this.setupInterval();
        this.setIndex(this.currentIndex);
    }

    public ngOnDestroy(): void {
        this.clearInterval();
    }

    public setupInterval(): void {
        this.autoNextInterval = setInterval(() => this.nextSlide(), this.slideTimeout);
    }

    public clearInterval(): void {
        if (this.autoNextInterval !== null) {
            clearInterval(this.autoNextInterval);
            this.autoNextInterval = null;
        }
    }

    public setIndexByClick(newI: number): void {
        this.setIndex(newI);
        clearInterval(this.autoNextInterval!);
        this.setupInterval();
    }

    private nextSlide(): void {
        this.setIndex(this.currentIndex + 1);
    }

    private setIndex(newI: number): void {
        const oldIndex = this.currentIndex;

        if (newI < 0) this.currentIndex = this.games.length;
        else if (newI >= this.games.length) this.currentIndex = newI % this.games.length;
        else this.currentIndex = newI;

        CarouselComponent.doBulletAnimation(oldIndex, false);
        CarouselComponent.doBulletAnimation(this.currentIndex, true);
    }

    private static doBulletAnimation(index: number, addClass: boolean): void {
        const bullet = document.querySelectorAll('.bullets i').item(index);

        const first = bullet.getBoundingClientRect();

        if (addClass) bullet.classList.add('current');
        else bullet.classList.remove('current');

        const last = bullet.getBoundingClientRect();

        const deltaX = first.left - last.left;
        const deltaW = first.width / last.width;

        bullet.animate(
            [{transform: `translateX(${deltaX}px) scaleX(${deltaW})`}, {transform: `translateX(0) scaleX(1)`}],
            {duration: 300, easing: 'ease-in'}
        );
    }
}
