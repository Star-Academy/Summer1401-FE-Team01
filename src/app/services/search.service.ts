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

    public constructor(private apiService: ApiService) {
        this.setupLists().then();
    }
    private async setupLists(): Promise<void> {
        this.gameModes = await this.fetchCheckListItems('gameModes', API_GAME_MODES);
        this.genres = await this.fetchCheckListItems('genres', API_GENRES);
        this.platforms = await this.fetchCheckListItems('platforms', API_PLATFORMS);
        this.playerPerspectives = await this.fetchCheckListItems('playerPerspectives', API_PLAYER_PERSPECTIVES);
        this.themes = await this.fetchCheckListItems('themes', API_GAME_THEMES);
    }

    public async fetchCheckListItems(key: string, url: string): Promise<Array<ChecklistItem>> {
        let items = JSON.parse(localStorage.getItem(key) || '{}') as Array<ChecklistItem>;

        if (!items) {
            items = (await this.apiService.getRequest<Array<ChecklistItem>>({url})) || [];
        }

        items = items?.map(({id, name}) => new ChecklistItem(id, name, false));

        localStorage.setItem(key, JSON.stringify(items));

        return items;
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
        this.gameModes = this.gameModes.map(({id, name}) => new ChecklistItem(id, name, false));
        this.genres = this.genres.map(({id, name}) => new ChecklistItem(id, name, false));
        this.keywords = this.keywords.map(({id, name}) => new ChecklistItem(id, name, false));
        this.platforms = this.platforms.map(({id, name}) => new ChecklistItem(id, name, false));
        this.playerPerspectives = this.playerPerspectives.map(({id, name}) => new ChecklistItem(id, name, false));
        this.themes = this.themes.map(({id, name}) => new ChecklistItem(id, name, false));

        this.minRating = 0;
        this.maxRating = 10;
    }
}
