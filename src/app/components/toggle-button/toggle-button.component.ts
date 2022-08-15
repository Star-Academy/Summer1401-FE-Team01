import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
    @Input() public trueText?: string;
    @Input() public trueIconClasses?: string;
    @Input() public trueButtonTitle?: string;

    @Input() public falseText?: string;
    @Input() public falseIconClasses?: string;
    @Input() public falseButtonTitle?: string;

    @Input() public buttonTheme: 'text' | 'outline' | 'contained' = 'outline';

    @Input() public value!: boolean;
}
