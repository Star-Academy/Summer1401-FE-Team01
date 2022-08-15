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
import {SnackbarService} from './snackbar.service';
import {SnackbarTheme} from '../enums/snackbar-theme.enum';

@Injectable({
    providedIn: 'root',
})
export class UserBookmarkFavouriteService {
    public cachedFaveIds: Array<number> | null = null;
    public cachedBookmarkIds: Array<number> | null = null;

    public constructor(
        private apiService: ApiService,
        private authService: AuthService,
        private snackbarService: SnackbarService
    ) {
        this.fetchAllBookmarks().then();
        this.fetchAllFavourites().then();
    }

    public async fetchAllFavourites(): Promise<Array<Game>> {
        const res = await this.fetchAll(API_FAVES_ALL);
        if (res) {
            this.cachedFaveIds = res.map((g) => g.id);
        }
        return res;
    }

    public async fetchAllBookmarks(): Promise<Array<Game>> {
        const res = await this.fetchAll(API_BOOKMARKS_ALL);
        if (res) {
            this.cachedBookmarkIds = res.map((g) => g.id);
        }
        return res;
    }

    private async fetchAll(url: string): Promise<Array<Game>> {
        const response = await this.apiService.postRequest<{games: Array<Game>}>({
            url,
            body: {token: this.authService.token},
            showSnackbar: false,
        });

        return (response?.games || []).map((game) => new Game(game));
    }

    public async addToFaves(gameId: number): Promise<boolean> {
        const res = await this.add(API_FAVES_ADD, gameId);
        if (res) {
            this.cachedFaveIds?.push(gameId);
            this.snackbarService.show({
                theme: SnackbarTheme.SUCCESS,
                text: 'بازی با موفقیت به علاقه‌مندی‌ها افزوده شد',
            });
        }
        return res;
    }

    public async addToBookmarks(gameId: number): Promise<boolean> {
        const res = await this.add(API_BOOKMARKS_ADD, gameId);
        if (res) {
            this.cachedBookmarkIds?.push(gameId);
            this.snackbarService.show({
                theme: SnackbarTheme.SUCCESS,
                text: 'بازی با موفقیت به بوکمارک‌ها افزوده شد',
            });
        }
        return res;
    }

    private async add(url: string, gameId: number): Promise<boolean> {
        const response = await this.apiService.postRequest<{games: Array<Game>}>({
            url,
            body: {token: this.authService.token, gameId},
        });
        return !!response;
    }

    public async removeFromFaves(gameId: number): Promise<boolean> {
        const res = await this.remove(API_FAVES_REMOVE, gameId);
        if (res) {
            this.cachedFaveIds = this.cachedFaveIds?.filter((gId) => gId !== gameId) || [];
            this.snackbarService.show({
                theme: SnackbarTheme.SUCCESS,
                text: 'بازی با موفقیت از علاقه‌مندی‌های شما حذف شد',
            });
        }
        return res;
    }

    public async removeFromBookmarks(gameId: number): Promise<boolean> {
        const res = await this.remove(API_BOOKMARKS_REMOVE, gameId);
        if (res) {
            this.cachedBookmarkIds = this.cachedBookmarkIds?.filter((gId) => gId !== gameId) || [];
            this.snackbarService.show({
                theme: SnackbarTheme.SUCCESS,
                text: 'بازی با موفقیت از بوکمارک‌های شما حذف شد',
            });
        }
        return res;
    }

    private async remove(url: string, gameId: number): Promise<boolean> {
        const response = await this.apiService.deleteRequest<{games: Array<Game>}>({
            url,
            body: {token: this.authService.token, gameId},
        });
        return !!response;
    }
}
