import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    @Input() public type!: string;
    @Input() public name!: string;
    @Input() public label!: string;
    @Input() public required: boolean = false;
    @Input() public direction: 'rtl' | 'ltr' = 'rtl';
    @Input() public pattern!: string;
    @Input() public placeholder?: string;
    @Input() public value!: string;

    @Output() public valueChange = new EventEmitter<string>();
}
