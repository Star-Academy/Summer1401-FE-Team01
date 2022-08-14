import {ChangeDetectorRef, Component} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {SpinnerService} from '../../services/spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    public ids: string[] = [];

    public constructor(private changeDetectorRef: ChangeDetectorRef, private spinnerService: SpinnerService) {
        this.spinnerService.initComponent(this);
    }

    public show(): string {
        const id = uuid();
        this.ids.push(id);

        return id;
    }

    public hide(id: string): void {
        this.ids = this.ids.filter((i) => i !== id);
    }

    public hideAll(): void {
        this.ids = [];
    }
}