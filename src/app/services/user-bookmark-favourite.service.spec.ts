import {TestBed} from '@angular/core/testing';

import {UserBookmarkFavouriteService} from './user-bookmark-favourite.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('UserBookmarkFavouriteService', () => {
    let service: UserBookmarkFavouriteService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });
        service = TestBed.inject(UserBookmarkFavouriteService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
