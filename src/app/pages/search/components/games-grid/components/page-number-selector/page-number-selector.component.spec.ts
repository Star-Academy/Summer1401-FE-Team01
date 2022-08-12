import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageNumberSelectorComponent} from './page-number-selector.component';

describe('PageNumberSelectorComponent', () => {
    let component: PageNumberSelectorComponent;
    let fixture: ComponentFixture<PageNumberSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageNumberSelectorComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNumberSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
