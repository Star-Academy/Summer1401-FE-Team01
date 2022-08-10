import {Injectable} from '@angular/core';
import {ChecklistItem} from '../pages/search/models/checklist-item.model';
import {ApiService} from './api.service';
import {
    API_GAME_MODES,
    API_GAME_SEARCH,
    API_GAME_THEMES,
    API_GENRES,
    API_PLATFORMS,
    API_PLAYER_PERSPECTIVES,
} from '../utils/api.utils';
import {Game} from '../models/game.model';
import {Pair} from '../models/pair.model';
import {GameService} from './game.service';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    public searchPhrase!: string;

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

    public constructor(private apiService: ApiService, private gameService: GameService) {
        gameService.fetchCheckListItems(API_GAME_MODES).then((res) => (this.gameModes = res));
        gameService.fetchCheckListItems(API_GENRES).then((res) => (this.genres = res));
        gameService.fetchCheckListItems(API_PLATFORMS).then((res) => (this.platforms = res));
        gameService.fetchCheckListItems(API_PLAYER_PERSPECTIVES).then((res) => (this.playerPerspectives = res));
        gameService.fetchCheckListItems(API_GAME_THEMES).then((res) => (this.themes = res));
    }

    public async search(): Promise<Pair<number, Array<Game>> | null> {
        const response = await this.apiService.postRequest<{count: number; games: Array<Game>}>({
            url: API_GAME_SEARCH,
            body: {
                searchPhrase: this.searchPhrase,
                pageSize: this.pageSize,
                offset: this.offset,
                sort: this.sort,
                filters: {
                    gameModes: this.gameModes.filter((item) => item.isSelected).map((item) => item.id),
                    genres: this.genres.filter((item) => item.isSelected).map((item) => item.id),
                    keywords: this.keywords.filter((item) => item.isSelected).map((item) => item.id),
                    platforms: this.platforms.filter((item) => item.isSelected).map((item) => item.id),
                    playerPerspectives: this.playerPerspectives
                        .filter((item) => item.isSelected)
                        .map((item) => item.id),
                    themes: this.themes.filter((item) => item.isSelected).map((item) => item.id),
                    minimumRating: this.minRating * 10,
                    maximumRating: this.maxRating * 10,
                },
            },
        });
        if (!response) return null;
        return new Pair(response.count, response.games);
    }

    public resetFilters(): void {
        this.searchPhrase = '';

        this.gameModes.forEach((item) => (item.isSelected = false));
        this.genres.forEach((item) => (item.isSelected = false));
        this.keywords.forEach((item) => (item.isSelected = false));
        this.platforms.forEach((item) => (item.isSelected = false));
        this.playerPerspectives.forEach((item) => (item.isSelected = false));
        this.themes.forEach((item) => (item.isSelected = false));

        this.minRating = 0;
        this.maxRating = 10;

        this.sort = 2;
        this.pageSize = 10;
        this.pageNumber = 0;
    }
}
