import {SnackbarService} from './snackbar.service';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {TestBed} from '@angular/core/testing';

describe('SnackbarService', () => {
    let service: SnackbarService;
    let snackbarComponentSpy: jasmine.SpyObj<SnackbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SnackbarService);
        snackbarComponentSpy = jasmine.createSpyObj<SnackbarComponent>('SnackbarComponent', ['show']);
    });

    it('tests create', () => {
        expect(service).toBeTruthy();
    });

    it('tests show', () => {
        service.initComponent(snackbarComponentSpy);
        service.show({text: 'This is a message.'});
        expect(snackbarComponentSpy.show.calls.count()).toBe(1);
    });
});
