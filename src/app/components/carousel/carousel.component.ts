import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    QueryList,
    SimpleChanges,
    ViewChildren,
} from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnChanges, OnDestroy {
    @Input() public games: Array<Game> = [];

    @ViewChildren('bullet') public bullets!: QueryList<ElementRef>;

    private readonly BULLET_DURATION: number = 300;
    public readonly SLIDE_TIMEOUT: number = 4_000;
    public currentIndex!: number;

    private autoNextInterval!: number | null;

    public ngAfterViewInit(): void {
        this.setupInterval();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.games) {
            this.setIndex(0);
        }
    }

    public ngOnDestroy(): void {
        this.clearInterval();
    }

    public setupInterval(): void {
        this.autoNextInterval = setInterval(() => this.intervalNextSlide(), this.SLIDE_TIMEOUT);
    }

    public clearInterval(): void {
        if (this.autoNextInterval) {
            clearInterval(this.autoNextInterval);
            this.autoNextInterval = null;
        }
    }

    public setIndexByClick(newI: number): void {
        this.setIndex(newI);
        clearInterval(this.autoNextInterval!);
        this.setupInterval();
    }
    public bulletClickHandler(index: number): void {
        this.setIndexByClick(index);
    }
    public nextButtonClickHandler(): void {
        this.setIndexByClick(this.currentIndex + 1);
    }

    public intervalNextSlide(): void {
        this.setIndex(this.currentIndex + 1);
    }

    private setIndex(newI: number): void {
        const oldIndex = this.currentIndex;

        if (newI < 0) this.currentIndex = this.games.length;
        else if (newI >= this.games.length) this.currentIndex = newI % this.games.length;
        else this.currentIndex = newI;

        this.playBulletAnimation(oldIndex, false);
        this.playBulletAnimation(this.currentIndex, true);
    }

    private playBulletAnimation(index: number, addClass: boolean): void {
        const bullet = this.bullets.get(index)?.nativeElement;

        if (bullet) {
            const first = bullet.getBoundingClientRect();

            if (addClass) bullet.classList.add('current');
            else bullet.classList.remove('current');

            const last = bullet.getBoundingClientRect();

            const deltaX = first.left - last.left;
            const deltaW = first.width / last.width;

            bullet.animate(
                [{transform: `translateX(${deltaX}px) scaleX(${deltaW})`}, {transform: `translateX(0) scaleX(1)`}],
                {duration: this.BULLET_DURATION, easing: 'ease-in'}
            );
        }
    }
}
