import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SnackbarComponent} from './snackbar.component';
import {SnackbarTheme} from '../../enums/snackbar-theme.enum';
import {SnackbarOptions} from '../../models/snackbar-options.model';

describe('SnackbarComponent', () => {
    let fixture: ComponentFixture<SnackbarComponent>;
    let component: SnackbarComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SnackbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests snackbar render - default inputs', () => {
        testDom();
    });

    it('tests snackbar render - message', () => {
        const options: SnackbarOptions = {text: 'This is a message.'};
        show(options);
        testDom(options);
    });

    it('tests snackbar render - message and theme', () => {
        const options: SnackbarOptions = {text: 'This is a message.', theme: SnackbarTheme.WARNING};
        show(options);
        testDom(options);
    });

    it('tests hide()', () => {
        const options: SnackbarOptions = {text: 'This is a message.'};
        show(options);
        hide();
        testDom();
    });

    it('tests timeout', fakeAsync(() => {
        const options: SnackbarOptions = {text: 'This is a message.'};
        show(options);
        tick(component.AUTO_HIDE_TIMEOUT);
        testDom();
    }));

    // [SECTION] Utility Functions

    const show = (options: SnackbarOptions): void => {
        component.show(options);
        fixture.detectChanges();
    };

    const hide = (): void => {
        component.hide();
        fixture.detectChanges();
    };

    const testDom = (options?: SnackbarOptions): void => {
        fixture.detectChanges();

        testSnackbar(options);
        testSnackbarMessage(options);
        testSnackbarIconButton();
    };

    const testSnackbar = (options?: SnackbarOptions): void => {
        const snackbar = host.querySelector('.wrapper');

        expect(snackbar).toBeTruthy();
        expect(snackbar?.classList).toContain(options?.theme || SnackbarTheme.DEFAULT);

        if (options?.text) expect(snackbar?.classList).not.toContain('hidden');
        else expect(snackbar?.classList).toContain('hidden');
    };

    const testSnackbarMessage = (options?: SnackbarOptions): void => {
        const message = host.querySelector('.wrapper p');

        expect(message).toBeTruthy();
        if (options?.text) expect(message?.textContent).toContain(options.text);
    };

    const testSnackbarIconButton = (): void => {
        const iconButton = host.querySelector('.wrapper i');
        expect(iconButton).toBeTruthy();
        expect(iconButton?.className).toEqual('far fa-xmark-large');
    };
});
