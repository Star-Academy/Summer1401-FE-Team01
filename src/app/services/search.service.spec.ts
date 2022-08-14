import {TestBed} from '@angular/core/testing';

import {SearchService} from './search.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('SearchService', () => {
    let service: SearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });
        service = TestBed.inject(SearchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
