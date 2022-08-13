import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {API_GAME_ONE, API_GAME_UPCOMING} from '../utils/api.utils';
import {Game} from '../models/game.model';
import {TranslateService} from './translate.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public constructor(private apiService: ApiService, private translateService: TranslateService) {}

    public async fetchSlideshowGames(): Promise<Array<Game>> {
        let gamesResponse =
            (
                await this.apiService.getRequest<{games: Array<Game>}>({
                    url: API_GAME_UPCOMING,
                })
            )?.games?.map((game) => new Game(game)) || [];

        if (!!gamesResponse) {
            // todo: uncomment
            // gamesResponse = await this.translateGameInfo(gamesResponse);
        }

        console.log(gamesResponse);

        return gamesResponse || [];
    }

    public async fetchGame(gameId: number): Promise<Game | null> {
        let gameResponse =
            (
                await this.apiService.getRequest<{game: Game}>({
                    url: `${API_GAME_ONE}/${gameId}`,
                })
            )?.game || null;

        if (!!gameResponse) {
            gameResponse = new Game(gameResponse);
            // todo: uncomment
            // gameResponse = (await this.translateGameInfo([gameResponse]))[0];
        }

        console.log(gameResponse);

        return gameResponse;
    }

    private async translateGameInfo(games: Array<Game>): Promise<Array<Game>> {
        const translatables = [];

        for (let i = 0; i < games.length; i++) {
            let game = games[i];
            translatables.push(game.summary || '', game.storyline || '');
        }

        const translationsResponse = await this.translateService.translateStrings(translatables);

        if (!!translationsResponse) {
            for (let i = 0; i < games.length; i++) {
                games[i].summary = translationsResponse[2 * i];
                games[i].storyline = translationsResponse[2 * i + 1];
            }
        }

        return games;
    }
}
