import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() public text?: string;
    @Input() public iconClasses?: string;
    @Input() public iconTitle?: string;
    @Input() public theme: 'text' | 'outline' | 'contained' = 'contained';
    @Input() public buttonType!: string;
}
