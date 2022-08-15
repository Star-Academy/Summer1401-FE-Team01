import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthComponent} from './components/auth/auth.component';
import {GamePageComponent} from './pages/game-page/game-page.component';
import {SearchComponent} from './pages/search/search.component';
import {GamesGridComponent} from './pages/search/components/games-grid/games-grid.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'auth', component: AuthComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'game', component: GamePageComponent},
    {path: 'search', component: SearchComponent},
    {path: 'favourite', component: GamesGridComponent, canActivate: [AuthGuard]},
    {path: 'bookmark', component: GamesGridComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
