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

    @Input() public rangeMinimum!: number;
    @Input() public rangeMaximum!: number;

    public onValueChange(event: Event, emitter: EventEmitter<number>): void {
        let target = event.target! as HTMLInputElement;
        let value = Number.parseInt(target.value);

        emitter.emit(value);
        (target.parentNode as HTMLElement).style?.setProperty(`--${target.id}`, `${value}`);
    }
}
