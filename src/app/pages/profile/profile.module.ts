import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {EditableFieldComponent} from './components/editable-field/editable-field.component';
import {FormsModule} from '@angular/forms';
import {InputModule} from '../../components/input/input.module';
import {ButtonModule} from '../../components/button/button.module';

@NgModule({
    declarations: [ProfileComponent, EditableFieldComponent],
    imports: [CommonModule, RouterModule, FormsModule, InputModule, ButtonModule],
})
export class ProfileModule {}
