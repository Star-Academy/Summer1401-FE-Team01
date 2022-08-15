import {Injectable} from '@angular/core';
import {DEFAULT_DELETE_REQUEST_INIT, DEFAULT_POST_REQUEST_INIT} from '../utils/api.utils';
import {SnackbarService} from './snackbar.service';
import {ApiError} from '../models/api-error.model';
import {GetRequestOptions, PostRequestOptions, RequestOptions} from '../models/request-options.model';
import {SnackbarTheme} from '../enums/snackbar-theme.enum';
import {SpinnerService} from './spinner.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private snackbarService: SnackbarService, private spinnerService: SpinnerService) {}

    private static generatePostRequestInit(options: PostRequestOptions): RequestInit {
        return {
            ...DEFAULT_POST_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }

    private static generateDeleteRequestInit(options: PostRequestOptions): RequestInit {
        return {
            ...DEFAULT_DELETE_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }

    public async getRequest<T>(options: GetRequestOptions): Promise<T | null> {
        return await this.fetchRequest<T>(options, options.init);
    }

    public async postRequest<T>(options: PostRequestOptions): Promise<T | null> {
        const init = ApiService.generatePostRequestInit(options);
        return await this.fetchRequest<T>(options, init);
    }

    public async deleteRequest<T>(options: PostRequestOptions): Promise<T | null> {
        const init = ApiService.generateDeleteRequestInit(options);
        return await this.fetchRequest<T>(options, init);
    }

    public async fetchRequest<T>(options: RequestOptions, init?: RequestInit): Promise<T | null> {
        const id = this.spinnerService.show();

        try {
            const {url, showSnackbar = true} = options;

            const response = await fetch(url, init);

            let data;
            try {
                data = await response.json();
            } catch (e) {
                data = {};
            }

            if (response.ok) return data as T;

            if (showSnackbar)
                this.snackbarService.show({text: (data as ApiError).message, theme: SnackbarTheme.DANGER});

            return null;
        } finally {
            this.spinnerService.hide(id);
        }
    }
}
