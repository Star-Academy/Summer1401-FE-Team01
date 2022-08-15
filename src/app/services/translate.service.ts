import {Injectable} from '@angular/core';
import {API_TRANSLATE, TRANSLATE_REQUEST_INIT} from '../utils/api.utils';
import {ApiService} from './api.service';
import {PostRequestOptions} from '../models/request-options.model';

@Injectable({
    providedIn: 'root',
})
export class TranslateService {
    public constructor(private apiService: ApiService) {}

    private static generateTranslateRequestInit(options: PostRequestOptions): RequestInit {
        return {
            ...TRANSLATE_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }

    public async translateStrings(strings: Array<string>): Promise<Array<string>> {
        const body = {from: 'en', to: 'fa', e: '', q: strings};
        const options = {url: API_TRANSLATE, body};
        const init = TranslateService.generateTranslateRequestInit(options);

        const response = await this.apiService.fetchRequest<Array<string>>(options, init);

        if (response) {
            return response.map((s) => this.removeEnglish(s));
        }

        return [];
    }

    private removeEnglish(text: string): string {
        return text.replaceAll(/(<\/?b> ?)|(<i>.*?<\/i>)/gi, '').replaceAll(/ {2,}/gi, ' ');
    }
}
