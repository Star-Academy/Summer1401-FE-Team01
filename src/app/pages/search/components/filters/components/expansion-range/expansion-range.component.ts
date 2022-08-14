import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-expansion-range',
    templateUrl: './expansion-range.component.html',
    styleUrls: ['./expansion-range.component.scss'],
})
export class ExpansionRangeComponent {
    @Input() public title!: string;

    @Input() public minRating!: number;
    @Output() public minRatingChange = new EventEmitter<number>();

    @Input() public maxRating!: number;
    @Output() public maxRatingChange = new EventEmitter<number>();

    public isExpanded: boolean = false;
}
