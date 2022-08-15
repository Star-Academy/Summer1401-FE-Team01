import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('GameService', () => {
    let service: GameService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });
        service = TestBed.inject(GameService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
