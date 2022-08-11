import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.scss'],
})
export class RangeInputComponent {
    @Input() public minLabel!: string;
    @Input() public minValue!: number;
    @Output() public minValueChange = new EventEmitter<number>();

    @Input() public maxLabel!: string;
    @Input() public maxValue!: number;
    @Output() public maxValueChange = new EventEmitter<number>();

    public onDragBall(event: MouseEvent): void {
        console.log(event.x);
    }
}
