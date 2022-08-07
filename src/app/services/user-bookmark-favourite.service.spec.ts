import {TestBed} from '@angular/core/testing';

import {UserBookmarkFavouriteService} from './user-bookmark-favourite.service';

describe('UserBookmarkFavouriteService', () => {
    let service: UserBookmarkFavouriteService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserBookmarkFavouriteService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
