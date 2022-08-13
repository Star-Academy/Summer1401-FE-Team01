import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import { EditableFieldComponent } from './components/editable-field/editable-field.component';

@NgModule({
    declarations: [ProfileComponent, EditableFieldComponent],
    imports: [CommonModule, RouterModule],
})
export class ProfileModule {}
