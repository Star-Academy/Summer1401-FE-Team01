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
        const response = await this.apiService.getRequest<{games: Array<Game>}>({url: API_GAME_UPCOMING});

        let gamesResponse = response?.games || [];
        gamesResponse = gamesResponse.map((game) => new Game(game));
        gamesResponse = gamesResponse.slice(0, 7);

        if (gamesResponse) {
            const translations = await this.translateGameInfo(gamesResponse);
            translations.forEach((t, i) => {
                gamesResponse[i].summary = t.summary;
                gamesResponse[i].storyline = t.storyline;
            });
        }

        return gamesResponse;
    }

    public async fetchGame(gameId: number): Promise<Game | null> {
        const response = await this.apiService.getRequest<{game: Game}>({url: `${API_GAME_ONE}/${gameId}`});

        let gameResponse = response?.game || null;

        if (gameResponse) {
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

        if (translationsResponse) {
            games.forEach((game, i) => {
                game.summary = translationsResponse[2 * i];
                game.storyline = translationsResponse[2 * i + 1];
            });
        }

        return games;
    }
}
