import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent, SideNavComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, FormsModule],
})
export class HeaderModule {}
