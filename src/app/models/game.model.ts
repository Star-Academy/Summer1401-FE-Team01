import {ChecklistItem} from '../pages/search/models/checklist-item.model';
import {SafeResourceUrl} from '@angular/platform-browser';

export class Game {
    public id!: number;
    public name!: string;

    public gameModes!: Array<ChecklistItem>;
    public genres!: Array<ChecklistItem>;
    public keywords!: Array<ChecklistItem>;
    public platforms!: Array<ChecklistItem>;
    public themes!: Array<ChecklistItem>;
    public playerPerspectives!: Array<ChecklistItem>;

    public involvedCompanies!: Array<InvolvedCompany>;

    public rating!: number;
    public ratingCount!: number;

    public releaseDate!: number;

    public cover!: Image;
    public screenshots!: Array<Image>;
    public artworks!: Array<Image>;
    public videos!: Array<Video>;

    public storyline!: string;
    public summary!: string;
}

export class Image {
    public id!: string;
    public width!: number;
    public height!: number;
}

export enum ImageType {
    COVER_SMALL = 'cover_small',
    SCREENSHOT_MED = 'screenshot_med',
    COVER_BIG = 'cover_big',
    LOGO_MED = 'logo_med',
    SCREENSHOT_BIG = 'screenshot_big',
    SCREENSHOT_HUGE = 'screenshot_huge',
    THUMB = 'thumb',
    MICRO = 'micro',
    _720P = '720p',
    _1080P = '1080p',
}

export class Video {
    public id!: string;
    public name!: string;
    public safeUrl?: SafeResourceUrl;
}

export class Company {
    public id!: number;
    public name!: string;
    public logo!: Image;
    public url!: string;
}

export class InvolvedCompany {
    public company!: Company;
    public developer!: boolean;
    public porting!: boolean;
    public publisher!: boolean;
    public supporting!: boolean;
}
