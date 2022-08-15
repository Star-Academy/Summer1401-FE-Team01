import {RegisterComponent} from './register.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FetchMock} from '../../../../mocks/fetch.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {SnackbarService} from '../../../../services/snackbar.service';
import {SnackbarServiceMock} from '../../../../mocks/snackbar-service.mock';

describe('RegisterComponent', () => {
    let fixture: ComponentFixture<RegisterComponent>;
    let component: RegisterComponent;
    let host: HTMLElement;

    let fetchMock: FetchMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{provide: SnackbarService, useValue: new SnackbarServiceMock()}],
        }).compileComponents();

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    const firstLastNameStatuses = ['none', 'only first', 'only last', 'both'];
    for (const status of firstLastNameStatuses) {
        it(`tests user getter - ${status}`, () => {
            component.username = 'BijanProgrammer';
            component.password = '1234';
            component.email = 'bijaneisapour@gmail.com';
            component.firstName = 'بیژن';
            component.lastName = 'عیسی پور';

            fixture.detectChanges();

            if (status === 'none') testUserGetter(null, null);
            else if (status === 'only first') testUserGetter('بیژن', null);
            else if (status === 'only last') testUserGetter(null, 'عیسی پور');
            else if (status === 'both') testUserGetter('بیژن', 'عیسی پور');
        });
    }

    it('tests submit - password == confirm', async () => {
        component.username = 'BijanProgrammer';
        component.confirm = '1234';
        component.password = '1234';
        component.email = 'bijaneisapour@gmail.com';

        expect(await component.isSubmitSuccessful()).toBeTrue();
    });

    it('tests submit - password != confirm', async () => {
        component.username = 'BijanProgrammer';
        component.confirm = '123';
        component.password = '1234';
        component.email = 'bijaneisapour@gmail.com';

        expect(await component.isSubmitSuccessful()).toBeFalse();
    });

    // [SECTION] Utility Functions

    const testUserGetter = (firstName: string | null, lastName: string | null): void => {
        if (!firstName) component.firstName = '';
        if (!lastName) component.lastName = '';
        fixture.detectChanges();

        const user = component.user;

        if (firstName) expect(user.firstName).toBe(firstName);
        else expect(user.firstName).toBeUndefined();

        if (lastName) expect(user.lastName).toBe(lastName);
        else expect(user.lastName).toBeUndefined();
    };
});
