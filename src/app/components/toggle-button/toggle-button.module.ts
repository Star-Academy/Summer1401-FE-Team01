import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleButtonComponent} from './toggle-button.component';
import {ButtonModule} from '../button/button.module';

@NgModule({
    declarations: [ToggleButtonComponent],
    imports: [CommonModule, ButtonModule],
    exports: [ToggleButtonComponent],
})
export class ToggleButtonModule {}
