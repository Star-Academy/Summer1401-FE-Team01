import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements AfterViewInit {
    @Input() public darkMode: boolean = false;
    @Input() public value!: number;

    public readonly MAX_VALUE = 5;

    public fullStars: Array<number> = [];
    public hasHalfStar: boolean = false;
    public emptyStars: Array<number> = [];

    public ngAfterViewInit(): void {
        this.fullStars.length = Math.floor(this.value);
        this.hasHalfStar = this.value.toString().includes('.');
        this.emptyStars.length = Math.floor(this.MAX_VALUE - this.value);
    }
}
