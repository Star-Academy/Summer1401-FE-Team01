import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/user.model';

@Component({
    selector: 'app-editable-field',
    templateUrl: './editable-field.component.html',
    styleUrls: ['./editable-field.component.scss'],
})
export class EditableFieldComponent {
    @Input() public title!: keyof User;
    @Input() public titlePersian!: string;

    @Input() public type!: string;
    @Input() public name!: string;
    @Input() public direction: 'rtl' | 'ltr' = 'rtl';
    @Input() public pattern!: string;
    @Input() public placeholder?: string;

    @Input() public value!: string;
    @Output() public valueChange = new EventEmitter<string>();

    public editable = false;

    public constructor(private userService: UserService) {}

    public async onEditSubmit(): Promise<void> {
        const response = await this.userService.alterUserInfo(this.title, this.value);
        if (response) {
            this.valueChange.emit(this.value);
            this.editable = !this.editable;
        }
    }
}
