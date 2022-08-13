import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {EditableFieldComponent} from './components/editable-field/editable-field.component';
import {CarouselItemModule} from '../../components/carousel-item/carousel-item.module';
import {FormsModule} from '@angular/forms';
import {InputModule} from '../../components/input/input.module';

@NgModule({
    declarations: [ProfileComponent, EditableFieldComponent],
    imports: [CommonModule, RouterModule, CarouselItemModule, FormsModule, InputModule],
})
export class ProfileModule {}
