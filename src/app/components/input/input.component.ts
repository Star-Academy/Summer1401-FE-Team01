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

    @Input() public value!: string;
    @Output() public valueChange = new EventEmitter<string>();

    public get dir(): 'rtl' | 'ltr' {
        switch (this.name) {
            case 'username':
            case 'email':
            case 'password':
            case 'confirm':
                return 'ltr';
            default:
                return 'rtl';
        }
    }
}
