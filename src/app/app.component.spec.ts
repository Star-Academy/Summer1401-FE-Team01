import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CarouselModule} from './components/carousel/carousel.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from './components/header/header.module';
import {HomeModule} from './pages/home/home.module';
import {AuthModule} from './components/auth/auth.module';
import {ProfileModule} from './pages/profile/profile.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {TestBed} from '@angular/core/testing';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                BrowserModule,
                CarouselModule,
                AppRoutingModule,
                HeaderModule,
                HomeModule,
                AuthModule,
                ProfileModule,
                NgxPopperjsModule,
            ],
        }).compileComponents();
    });

    it('tests app create', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
