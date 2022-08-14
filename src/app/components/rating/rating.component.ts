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

    @Output() public valueChange = new EventEmitter<number>();

    public isHovering: boolean = false;
    public hoverValue: number = 0;

    public readonly MAX_VALUE = 5;

    @ViewChild('rating') public rating!: ElementRef<HTMLDivElement>;

    public constructor(private roundNumberToHalfPipe: RoundNumberToHalfPipe) {}

    public get fullStars(): Array<number> {
        return new Array(Math.floor(this.isHovering ? this.hoverValue : this.value));
    }

    public get hasHalfStar(): boolean {
        return (this.isHovering ? this.hoverValue : this.value).toString().includes('.');
    }

    public get emptyStars(): Array<number> {
        return new Array(Math.floor(this.MAX_VALUE - (this.isHovering ? this.hoverValue : this.value)));
    }

    public onHoverStart(event: MouseEvent): void {
        this.isHovering = true;
        this.hoverValue = this.calculateHoverValue(event);
    }

    public onHovering(event: MouseEvent): void {
        this.hoverValue = this.calculateHoverValue(event);
    }

    private calculateHoverValue(event: MouseEvent): number {
        const rect = this.rating.nativeElement.getBoundingClientRect();
        const x = event.clientX - rect.left;

        return this.roundNumberToHalfPipe.transform((x / rect.width) * this.MAX_VALUE);
    }

    public onHoverEnd(): void {
        this.isHovering = false;
        this.hoverValue = 0;
    }

    public onClick(event: MouseEvent): void {
        this.value = this.calculateHoverValue(event);
        this.valueChange.emit(this.value);
    }
}
