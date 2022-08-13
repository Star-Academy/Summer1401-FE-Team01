import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-editable-field',
    templateUrl: './editable-field.component.html',
    styleUrls: ['./editable-field.component.scss'],
})
export class EditableFieldComponent {
    @Input() public title!: string;
    @Input() public titlePersian!: string;

    @Input() public type!: string;
    @Input() public name!: string;
    @Input() public direction: 'rtl' | 'ltr' = 'rtl';

    @Input() public value!: string;
    @Input() public onValueChanged!: (title: string, newValue: string) => Promise<boolean>;

    public editable = false;

    public async onEditSubmit(): Promise<void> {
        if (await this.onValueChanged(this.title, this.value)) {
            this.editable = !this.editable;
        }
    }

    public toggleEditable(): void {
        console.log('toggleEditable');
        this.editable = !this.editable;
    }
}
