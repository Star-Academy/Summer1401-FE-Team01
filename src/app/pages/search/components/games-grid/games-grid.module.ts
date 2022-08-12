import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesGridComponent} from './games-grid.component';
import {TomanModule} from '../../../../components/toman/toman.module';

@NgModule({
    declarations: [GamesGridComponent],
    exports: [GamesGridComponent],
    imports: [CommonModule, TomanModule],
})
export class GamesGridModule {}
