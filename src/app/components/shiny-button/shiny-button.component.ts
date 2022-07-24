import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-shiny-button',
    templateUrl: './shiny-button.component.html',
    styleUrls: ['./shiny-button.component.scss'],
})
export class ShinyButtonComponent {
    @Input() public text!: string;
    @Input() public iconClasses?: string;
}
