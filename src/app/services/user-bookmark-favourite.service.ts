import {Injectable} from '@angular/core';
import {Game} from '../models/game.model';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {
    API_BOOKMARKS_ADD,
    API_BOOKMARKS_ALL,
    API_BOOKMARKS_REMOVE,
    API_FAVES_ADD,
    API_FAVES_ALL,
    API_FAVES_REMOVE,
} from '../utils/api.utils';

@Injectable({
    providedIn: 'root',
})
export class UserBookmarkFavouriteService {
    public cachedFaveIds: Array<number> | null = null;
    public cachedBookmarkIds: Array<number> | null = null;

    public constructor(private apiService: ApiService, private authService: AuthService) {
        this.fetchAllFavourites().then();
        this.fetchAllBookmarks().then();
    }

    public async fetchAllFavourites(): Promise<Array<number>> {
        console.log('cachedFaveIds', this.cachedFaveIds);
        if (this.cachedFaveIds !== null) return this.cachedFaveIds;

        const faves = await this.fetchAll(API_FAVES_ALL);
        this.cachedFaveIds = faves;

        return faves;
    }

    public async fetchAllBookmarks(): Promise<Array<number>> {
        console.log('cachedBookmarkIds', this.cachedBookmarkIds);
        if (this.cachedBookmarkIds !== null) return this.cachedBookmarkIds;

        const bookmarks = await this.fetchAll(API_BOOKMARKS_ALL);
        this.cachedBookmarkIds = bookmarks;

        return bookmarks;
    }

    private async fetchAll(url: string): Promise<Array<number>> {
        const response = await this.apiService.postRequest<{games: Array<Game>}>({
            url,
            body: {token: this.authService.token},
            showSnackbar: false,
        });

        console.log(url, response, response?.games, response?.games || []);

        return (response?.games || []).map((g) => g.id);
    }

    public async addToFaves(gameId: number): Promise<void> {
        const addRes = await this.add(API_FAVES_ADD, gameId);

        if (addRes) {
            this.cachedFaveIds?.push(gameId);
        }
    }

    public async addToBookmarks(gameId: number): Promise<void> {
        const addRes = await this.add(API_BOOKMARKS_ADD, gameId);

        if (addRes) {
            this.cachedBookmarkIds?.push(gameId);
        }
    }

    private async add(url: string, gameId: number): Promise<boolean> {
        const response = await this.apiService.postRequest<{games: Array<Game>}>({
            url,
            body: {token: this.authService.token, gameId},
            showSnackbar: false,
        });
        return !!response;
    }

    public async removeFromFaves(gameId: number): Promise<void> {
        const removeRes = await this.add(API_FAVES_REMOVE, gameId);
        console.log('removeFromFaves', removeRes);

        if (removeRes) {
            this.cachedFaveIds = this.cachedFaveIds?.filter((gId) => gId != gameId) || [];
        }
    }

    public async removeFromBookmarks(gameId: number): Promise<void> {
        const removeRes = await this.add(API_BOOKMARKS_REMOVE, gameId);
        console.log('removeFromBookmarks', removeRes);

        if (removeRes) {
            this.cachedBookmarkIds = this.cachedBookmarkIds?.filter((gId) => gId != gameId) || [];
        }
    }

    private async remove(url: string, gameId: number): Promise<boolean> {
        const response = await this.apiService.deleteRequest<{games: Array<Game>}>({
            url,
            body: {token: this.authService.token, gameId},
            showSnackbar: false,
        });
        return !!response;
    }
}
