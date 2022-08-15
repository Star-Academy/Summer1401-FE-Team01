import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FaveBookmarkButtonsComponent} from './fave-bookmark-buttons.component';

describe('FaveBookmarkButtonsComponent', () => {
    let component: FaveBookmarkButtonsComponent;
    let fixture: ComponentFixture<FaveBookmarkButtonsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FaveBookmarkButtonsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FaveBookmarkButtonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
