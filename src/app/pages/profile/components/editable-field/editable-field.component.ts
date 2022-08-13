import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-editable-field',
    templateUrl: './editable-field.component.html',
    styleUrls: ['./editable-field.component.scss'],
})
export class EditableFieldComponent {
    @Input() public title!: string;

    @Input() public value!: string;
    @Input() public onValueChanged!: (title: string, newValue: string) => void;
}
