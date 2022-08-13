import {GamesRowComponent} from './games-row.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CategoriesComponent', () => {
    let fixture: ComponentFixture<GamesRowComponent>;
    let component: GamesRowComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GamesRowComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GamesRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
