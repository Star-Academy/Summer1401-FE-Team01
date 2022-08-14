import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageNumberSelectorComponent} from './page-number-selector.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PageNumberSelectorComponent', () => {
    let component: PageNumberSelectorComponent;
    let fixture: ComponentFixture<PageNumberSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageNumberSelectorComponent],
            imports: [RouterTestingModule],
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
