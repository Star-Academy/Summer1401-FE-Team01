export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const API_USER_AUTH = `${BASE_URL}/user/auth`;
export const API_USER_LOGIN = `${BASE_URL}/user/login`;
export const API_USER_REGISTER = `${BASE_URL}/user/register`;
export const API_USER_ONE = `${BASE_URL}/user/one`;

export const API_GAME_SEARCH = `${BASE_URL}/search`;

export const API_TRANSLATE = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';

export const DEFAULT_POST_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
};

export const TRANSLATE_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'a9f50c2783msh07e246f23d2a0f5p1524bajsnabef888665a3',
        'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
    },
};
