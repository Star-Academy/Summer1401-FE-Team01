import {ChangeDetectorRef, Component} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {SpinnerService} from '../../services/spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    public ids: Set<string> = new Set<string>();

    private readonly COUNT: number = 16;

    public readonly DURATION: number = 2;
    public readonly DELAYS: number[] = Array(this.COUNT)
        .fill(0)
        .map((x, i) => -1 * (this.DURATION / this.COUNT) * Math.floor(i / 2));

    public constructor(private changeDetectorRef: ChangeDetectorRef, private spinnerService: SpinnerService) {
        this.spinnerService.initComponent(this);
    }

    public show(): string {
        const id = uuid();
        this.ids.add(id);

        return id;
    }

    public hide(id: string): void {
        this.ids.delete(id);
    }

    public hideAll(): void {
        this.ids = new Set();
    }
}
