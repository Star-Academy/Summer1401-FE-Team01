import {Component, OnDestroy} from '@angular/core';
import {SnackbarTheme} from '../../enums/snackbar-theme.enum';
import {SnackbarOptions} from '../../models/snackbar-options.model';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnDestroy {
    public text!: string;
    public theme: SnackbarTheme = SnackbarTheme.DEFAULT;

    public readonly AUTO_HIDE_TIMEOUT: number = 5_000;
    public timeoutId: number | null = null;

    public get hidden(): boolean {
        return !this.text;
    }

    public show(options: SnackbarOptions): void {
        this.text = options.text;
        this.theme = options.theme || SnackbarTheme.DEFAULT;
        this.startHideTimer();
    }

    public hide(): void {
        this.stopHideTimer();
        this.text = '';
    }

    public startHideTimer(): void {
        this.timeoutId = setTimeout(() => this.hide(), this.AUTO_HIDE_TIMEOUT);
    }

    public stopHideTimer(): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    public ngOnDestroy(): void {
        this.stopHideTimer();
    }
}
