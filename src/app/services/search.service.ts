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
import {Router} from '@angular/router';
import {Sort} from '../enums/sort.enum';

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

    public sort: number = 1;

    public pageSize: number = 10;
    public pageNumber: number = 0;

    public games: Array<Game> = [];
    public totalGameCount = 0;

    public get offset(): number {
        return this.pageSize * this.pageNumber;
    }

    public constructor(private apiService: ApiService, private router: Router) {
        this.setupLists().then();
    }

    public async goToSearchPageWithFilter(filter: FilterObject): Promise<void> {
        this.resetFilters();

        if (filter.gameModes)
            this.gameModes.filter((f) => filter.gameModes!.includes(f.id)).forEach((f) => (f.isSelected = true));
        if (filter.genres)
            this.genres.filter((f) => filter.genres!.includes(f.id)).forEach((f) => (f.isSelected = true));
        if (filter.platforms)
            this.platforms.filter((f) => filter.platforms!.includes(f.id)).forEach((f) => (f.isSelected = true));
        if (filter.playerPerspectives)
            this.playerPerspectives
                .filter((f) => filter.playerPerspectives!.includes(f.id))
                .forEach((f) => (f.isSelected = true));
        if (filter.themes)
            this.themes.filter((f) => filter.themes!.includes(f.id)).forEach((f) => (f.isSelected = true));

        await this.router.navigateByUrl('/search');
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

        if (Object.keys(items).length === 0) {
            items = (await this.apiService.getRequest<Array<ChecklistItem>>({url})) || [];
        }

        items = items?.map(({id, name}) => new ChecklistItem(id, name, false));

        localStorage.setItem(key, JSON.stringify(items));

        return items;
    }

    public async search(): Promise<void> {
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
                },
            },
        });
        this.games = response?.games.map((game) => new Game(game)) || [];
        this.totalGameCount = response?.count || 0;
    }

    public resetFilters(): void {
        this.gameModes = this.gameModes.map(({id, name}) => new ChecklistItem(id, name, false));
        this.genres = this.genres.map(({id, name}) => new ChecklistItem(id, name, false));
        this.keywords = this.keywords.map(({id, name}) => new ChecklistItem(id, name, false));
        this.platforms = this.platforms.map(({id, name}) => new ChecklistItem(id, name, false));
        this.playerPerspectives = this.playerPerspectives.map(({id, name}) => new ChecklistItem(id, name, false));
        this.themes = this.themes.map(({id, name}) => new ChecklistItem(id, name, false));

        this.sort = Sort.POPULAR;
    }
}

export interface FilterObject {
    gameModes?: Array<number>;
    genres?: Array<number>;
    platforms?: Array<number>;
    playerPerspectives?: Array<number>;
    themes?: Array<number>;
}
