import {Injectable} from '@angular/core';
import {ChecklistItem} from '../pages/search/models/checklist-item.model';
import {ApiService} from './api.service';
import {API_GAME_SEARCH, API_GAME_UPCOMING} from '../utils/api.utils';
import {Game} from '../models/game.model';
import {Pair} from '../models/pair.model';
import {SearchResultObject} from '../models/search-result-object.model';
import {TranslateService} from './translate.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public searchPhrase: string = '';

    public gameModes: Array<ChecklistItem> = [];
    public genres: Array<ChecklistItem> = [];
    public keywords: Array<ChecklistItem> = [];
    public platforms: Array<ChecklistItem> = [];
    public playerPerspectives: Array<ChecklistItem> = [];
    public themes: Array<ChecklistItem> = [];

    public minRating: number = 0;
    public maxRating: number = 10;

    public sort: number = 2;

    public pageSize: number = 10;
    public pageNumber: number = 0;

    public get offset(): number {
        return this.pageSize * this.pageNumber;
    }

    public constructor(private apiService: ApiService, private translateService: TranslateService) {}

    public async search(): Promise<Pair<number, Array<Game>> | null> {
        const response = await this.apiService.postRequest<SearchResultObject>({
            url: API_GAME_SEARCH,
            body: {
                searchPhrase: this.searchPhrase,
                pageSize: this.pageSize,
                offset: this.offset,
                sort: this.sort,
                filters: {
                    gameModes: this.gameModes.map((e) => e.id),
                    genres: this.genres.map((e) => e.id),
                    keywords: this.keywords.map((e) => e.id),
                    platforms: this.platforms.map((e) => e.id),
                    playerPerspectives: this.playerPerspectives.map((e) => e.id),
                    themes: this.themes.map((e) => e.id),
                    minimumRating: this.minRating * 10,
                    maximumRating: this.maxRating * 10,
                },
            },
        });
        if (!response) return null;

        return new Pair(response.count, response.games);
    }

    public async fetchSlideshowGames(): Promise<Array<Game>> {
        let gamesResponse = (
            await this.apiService.getRequest<{games: Array<Game>}>({
                url: API_GAME_UPCOMING,
            })
        )?.games.reduce((prevArray: Array<Game>, game: Game) => {
            if (!prevArray.some((g) => g.id == game.id)) prevArray.push(game);
            return prevArray;
        }, []);

        if (!!gamesResponse) {
            // const translatables = [];
            //
            // for (let i = 0; i < gamesResponse.length; i++) {
            //     let game = gamesResponse[i];
            //     translatables.push(game.summary || '', game.storyline || '');
            // }
            //
            // const translationsResponse = await this.translateService.translateStrings(translatables);
            //
            // if (!!translationsResponse) {
            //     for (let i = 0; i < gamesResponse.length; i++) {
            //         gamesResponse[i].summary = translationsResponse[2 * i];
            //         gamesResponse[i].storyline = translationsResponse[2 * i + 1];
            //     }
            // }
        }

        console.log(gamesResponse);

        return gamesResponse || [];
    }
}
