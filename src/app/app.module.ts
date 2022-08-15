import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselModule} from './components/carousel/carousel.module';
import {HeaderModule} from './components/header/header.module';
import {HomeModule} from './pages/home/home.module';
import {SnackbarComponent} from './components/snackbar/snackbar.component';
import {AuthModule} from './components/auth/auth.module';
import {ProfileModule} from './pages/profile/profile.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {GamePageModule} from './pages/game-page/game-page.module';
import {FooterModule} from './components/footer/footer.module';
import {SearchModule} from './pages/search/search.module';
import {SpinnerModule} from './components/spinner/spinner.module';
import {ButtonModule} from './components/button/button.module';

@NgModule({
    declarations: [AppComponent, SnackbarComponent],
    imports: [
        BrowserModule,
        CarouselModule,
        AppRoutingModule,
        HeaderModule,
        HomeModule,
        AuthModule,
        ProfileModule,
        NgxPopperjsModule,
        GamePageModule,
        FooterModule,
        SearchModule,
        SpinnerModule,
        ButtonModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
