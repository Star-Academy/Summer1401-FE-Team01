import {Injectable} from '@angular/core';
import {SpinnerComponent} from '../components/spinner/spinner.component';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinnerComponent!: SpinnerComponent;

    public get ids(): Set<string> {
        return this.spinnerComponent.ids;
    }

    public initComponent(spinnerComponent: SpinnerComponent): void {
        this.spinnerComponent = spinnerComponent;
    }

    public show(): string {
        return this.spinnerComponent?.show();
    }

    public hide(id: string): void {
        this.spinnerComponent?.hide(id);
    }

    public hideAll(): void {
        this.spinnerComponent?.hideAll();
    }
}
