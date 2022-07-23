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
        if (newI < 0) this.currentIndex = this.games.length;
        else if (newI >= this.games.length) this.currentIndex = newI % this.games.length;
        else this.currentIndex = newI;
    }
}
