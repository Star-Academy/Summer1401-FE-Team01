import {ButtonComponent} from './button.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('ButtonComponent', () => {
    let fixture: ComponentFixture<ButtonComponent>;
    let component: ButtonComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests type - default', () => {
        const button = host.querySelector('button');

        expect(button).toBeTruthy();
        expect(component.theme).toEqual('contained');
        testType();
    });

    const types: Array<'text' | 'outline' | 'contained'> = ['text', 'outline', 'contained'];
    for (const type of types) {
        it(`tests type - ${type}`, () => {
            testType(type);
        });
    }

    // [SECTION] Utility Functions
    const testType = (theme?: 'text' | 'outline' | 'contained'): void => {
        const button = host.querySelector('button');
        if (theme) {
            component.theme = theme;
            fixture.detectChanges();
        }

        expect(button?.className).toEqual(theme || 'contained');
    };
});
