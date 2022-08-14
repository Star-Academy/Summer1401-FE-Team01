import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {RoundNumberToHalfPipe} from '../../pages/search/components/games-grid/pipes/round-number-to-half.pipe';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
    @Input() public darkMode: boolean = false;
    @Input() public value: number = 0;

    public readonly MAX_VALUE = 5;

    public get fullStars(): Array<number> {
        return new Array(Math.floor(this.value));
    }

    public get hasHalfStar(): boolean {
        return this.value.toString().includes('.');
    }

    public get emptyStars(): Array<number> {
        return new Array(Math.floor(this.MAX_VALUE - this.value));
    }
}
