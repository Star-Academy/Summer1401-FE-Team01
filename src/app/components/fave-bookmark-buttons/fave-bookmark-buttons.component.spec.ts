import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FaveBookmarkButtonsComponent} from './fave-bookmark-buttons.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('FaveBookmarkButtonsComponent', () => {
    let component: FaveBookmarkButtonsComponent;
    let fixture: ComponentFixture<FaveBookmarkButtonsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FaveBookmarkButtonsComponent],
            imports: [RouterTestingModule],
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
