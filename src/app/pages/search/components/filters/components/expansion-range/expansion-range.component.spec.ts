import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpansionRangeComponent} from './expansion-range.component';

describe('ExpansionRatingRangeComponent', () => {
    let component: ExpansionRangeComponent;
    let fixture: ComponentFixture<ExpansionRangeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpansionRangeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpansionRangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
