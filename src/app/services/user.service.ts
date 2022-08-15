import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {User} from '../models/user.model';
import {API_USER_ALTER, API_USER_ONE} from '../utils/api.utils';
import {SnackbarService} from './snackbar.service';
import {SnackbarTheme} from '../enums/snackbar-theme.enum';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public constructor(private apiService: ApiService, private snackbarService: SnackbarService) {}

    public get token(): string {
        return localStorage.getItem('token') || '';
    }

    public async getUserInfo(id: number | null): Promise<User | null> {
        const response = await this.apiService.getRequest<{user: User}>({url: `${API_USER_ONE}/${id}`});

        return response?.user || null;
    }

    public async alterUserInfo(alteredField: keyof User, newValue: any): Promise<boolean> {
        const response = await this.apiService.postRequest<{}>({
            url: API_USER_ALTER,
            body: {token: this.token, [alteredField]: newValue},
        });

        if (response) {
            this.snackbarService.show({text: 'تغییر با موفقیت انجام شد', theme: SnackbarTheme.SUCCESS});
        }

        return !!response;
    }
}
