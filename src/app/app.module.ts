import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselModule} from './components/carousel/carousel.module';

import {HeaderModule} from './components/header/header.module';

import {HomeModule} from './pages/home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CarouselModule, AppRoutingModule, HeaderModule, HomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
