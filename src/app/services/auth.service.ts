import {Injectable} from '@angular/core';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../utils/api.utils';
import {ApiService} from './api.service';
import {TokenObject} from '../models/token-object.model';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public cachedIsLoggedIn: boolean | null = null;
    public cachedUserId: number | null = null;
    public cachedUser: User | null = null;

    public constructor(private router: Router, private apiService: ApiService, private userService: UserService) {
        this.auth().then();
    }

    public get token(): string {
        return localStorage.getItem('token') || '';
    }

    public async isLoggedIn(): Promise<boolean> {
        if (this.cachedIsLoggedIn !== null) return this.cachedIsLoggedIn;
        return await this.auth();
    }

    public async login(user: Partial<User>): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({url: API_USER_LOGIN, body: user});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id ?? null);
        return true;
    }

    public async register(user: Partial<User>): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({url: API_USER_REGISTER, body: user});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id ?? null);
        return true;
    }

    public async fetchLoggedInUserInfo(): Promise<User | null> {
        return this.userService.getUserInfo(this.cachedUserId);
    }

    public async logout(): Promise<void> {
        await this.saveCache(null, false, null);
        await this.router.navigateByUrl('/');
    }

    private async auth(): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({
            url: API_USER_AUTH,
            body: {token: this.token},
            showSnackbar: false,
        });

        await this.saveCache(this.token, !!response, response?.id ?? null);
        return !!this.cachedIsLoggedIn;
    }

    private async saveCache(token: string | null, isLoggedIn: boolean, userId: number | null): Promise<void> {
        if (token) localStorage.setItem('token', token);
        else localStorage.removeItem('token');

        this.cachedIsLoggedIn = isLoggedIn;
        this.cachedUserId = userId;

        if (this.cachedUserId) this.cachedUser = await this.fetchLoggedInUserInfo();
    }
}
