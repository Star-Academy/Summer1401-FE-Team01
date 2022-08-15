import {LoginComponent} from './login.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../../../../models/user.model';
import {SnackbarService} from '../../../../services/snackbar.service';
import {SnackbarServiceMock} from '../../../../mocks/snackbar-service.mock';
import {FetchMock} from '../../../../mocks/fetch.mock';
import {AuthComponent} from '../../auth.component';
import {ProfileComponent} from '../../../../pages/profile/profile.component';

describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let host: HTMLElement;

    let fetchMock: FetchMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    {path: 'auth', component: AuthComponent},
                    {path: 'profile', component: ProfileComponent},
                ]),
            ],
            providers: [{provide: SnackbarService, useValue: new SnackbarServiceMock()}],
        }).compileComponents();

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests user getter - loginWithEmail=default', () => {
        testLoginWithEmail();
    });

    it('tests user getter - loginWithEmail=true', () => {
        component.loginWithEmail = true;
        testLoginWithEmail(true);
    });

    it('tests user getter - loginWithEmail=false', () => {
        component.loginWithEmail = false;
        testLoginWithEmail(false);
    });

    it('tests toggleLoginEmail', () => {
        component.loginWithEmail = true;
        fixture.detectChanges();
        component.toggleLoginEmail();
        testLoginWithEmail(false);
    });

    for (const loginWithEmail of [false, true]) {
        it(`tests isSubmitSuccessful - loginWithEmail=${loginWithEmail}`, async () => {
            component.loginWithEmail = loginWithEmail;
            fixture.detectChanges();

            const form = {
                username: 'BijanProgrammer',
                password: '1234',
                email: 'bijaneisapour@gmail.com',
            };
            testLoginWithEmail(loginWithEmail, form);

            await component.formSubmitHandler();
            fixture.detectChanges();

            if (loginWithEmail) expect(component.username).toBe('');
            else expect(component.email).toBe('');

            testLoginWithEmail(loginWithEmail, form);
        });
    }

    // [SECTION] Utility Functions

    const testLoginWithEmail = (loginWithEmail: boolean = false, form: Partial<User> = {}): void => {
        if (form) {
            component.username = form.username as string;
            component.password = form.password as string;
            component.email = form.email as string;
        }
        fixture.detectChanges();

        expect(component.loginWithEmail).toBe(loginWithEmail);

        const user = component.user;
        expect(user.password).toBe(form.password);
        if (loginWithEmail) {
            expect(user.email).toBe(form.email);
            expect(user.username).toBeUndefined();
        } else {
            expect(user.username).toBe(form.username);
            expect(user.email).toBeUndefined();
        }
    };
});
