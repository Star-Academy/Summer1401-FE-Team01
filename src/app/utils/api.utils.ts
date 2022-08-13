export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const API_USER_AUTH = `${BASE_URL}/user/auth`;
export const API_USER_LOGIN = `${BASE_URL}/user/login`;
export const API_USER_REGISTER = `${BASE_URL}/user/register`;
export const API_USER_ALTER = `${BASE_URL}/user/alter`;
export const API_USER_ONE = `${BASE_URL}/user/one`;

export const API_GAME_ONE = `${BASE_URL}/one`;
export const API_GAME_UPCOMING = `${BASE_URL}/upcoming`;
export const API_GAME_SEARCH = `${BASE_URL}/search`;

export const API_GAME_MODES = `${BASE_URL}/game-modes`;
export const API_GAME_THEMES = `${BASE_URL}/themes`;
export const API_PLAYER_PERSPECTIVES = `${BASE_URL}/player-perspectives`;
export const API_GENRES = `${BASE_URL}/genres`;
export const API_PLATFORMS = `${BASE_URL}/platforms`;

export const API_FAVES_ALL = `${BASE_URL}/favorites/all`;
export const API_FAVES_ADD = `${BASE_URL}/favorites/add`;
export const API_FAVES_REMOVE = `${BASE_URL}/favorites/remove`;

export const API_BOOKMARKS_ALL = `${BASE_URL}/wishlist/all`;
export const API_BOOKMARKS_ADD = `${BASE_URL}/wishlist/add`;
export const API_BOOKMARKS_REMOVE = `${BASE_URL}/wishlist/remove`;

export const API_TRANSLATE = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';

export const DEFAULT_POST_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
};

export const DEFAULT_DELETE_REQUEST_INIT: RequestInit = {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
};

export const TRANSLATE_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b30c915c9dmsh856723c4ebc9ac9p10acfcjsnab77b70ee112',
        'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
    },
};
