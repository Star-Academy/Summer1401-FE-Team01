import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {LogoModule} from '../logo/logo.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {ProfileButtonModule} from '../profile-button/profile-button.module';
import {ButtonModule} from '../button/button.module';

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        LogoModule,
        NgxPopperjsModule,
        ProfileButtonModule,
        ButtonModule,
    ],
})
export class HeaderModule {}
