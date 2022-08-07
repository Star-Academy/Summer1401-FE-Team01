import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesGridComponent} from './games-grid.component';

@NgModule({
    declarations: [GamesGridComponent],
    exports: [GamesGridComponent],
    imports: [CommonModule],
})
export class GamesGridModule {}
