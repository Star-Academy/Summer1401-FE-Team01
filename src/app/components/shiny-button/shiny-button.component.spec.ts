import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShinyButtonComponent} from './shiny-button.component';

describe('ShinyButtonComponent', () => {
    let component: ShinyButtonComponent;
    let fixture: ComponentFixture<ShinyButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ShinyButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ShinyButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
