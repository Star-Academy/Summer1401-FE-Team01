import {Injectable} from '@angular/core';
import {SpinnerComponent} from '../components/spinner/spinner.component';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinnerComponent!: SpinnerComponent;

    public initComponent(spinnerComponent: SpinnerComponent): void {
        this.spinnerComponent = spinnerComponent;
    }

    public async wrapAsync<T>(callback: () => T): Promise<T> {
        if (!this.spinnerComponent) return callback();

        const spinnerId = this.show();

        try {
            return await callback();
        } finally {
            this.hide(spinnerId);
        }
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
