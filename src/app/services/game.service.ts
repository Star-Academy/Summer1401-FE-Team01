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
            for (let i = 0; i < gamesResponse.length; i += 10) {
                const translations = await this.translateGameInfo(gamesResponse.slice(i, i + 10));
                for (let j = 0; j < translations.length; j++) {
                    gamesResponse[i + j].summary = translations[j].summary;
                    gamesResponse[i + j].storyline = translations[j].storyline;
                }
            }
        }

        return gamesResponse;
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
            gameResponse = (await this.translateGameInfo([gameResponse]))[0];
        }

        return gameResponse;
    }

    public async translateGameInfo(games: Array<Game>): Promise<Array<Game>> {
        const translatables: Array<string> = [];
        games.forEach((game) => {
            translatables.push(game.summary || '', game.storyline || '');
        });

        const translationsResponse = await this.translateService.translateStrings(translatables);

        if (!!translationsResponse) {
            games.forEach((game, i) => {
                game.summary = translationsResponse[2 * i];
                game.storyline = translationsResponse[2 * i + 1];
            });
        }

        return games;
    }
}
