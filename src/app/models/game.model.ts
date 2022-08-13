import {ChecklistItem} from '../pages/search/models/checklist-item.model';
import {SafeResourceUrl} from '@angular/platform-browser';

export class Game {
    public id!: number;
    public name!: string;

    public price!: number;
    public priceOnSale!: number;

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

    public constructor(game: Game) {
        this.id = game.id;
        this.name = game.name;
        this.price = game.price;
        this.priceOnSale = game.priceOnSale;
        this.gameModes = game.gameModes;
        this.genres = game.genres;
        this.keywords = game.keywords;
        this.platforms = game.platforms;
        this.themes = game.themes;
        this.playerPerspectives = game.playerPerspectives;
        this.involvedCompanies = game.involvedCompanies;
        this.rating = game.rating;
        this.ratingCount = game.ratingCount;
        this.releaseDate = game.releaseDate;
        this.cover = new Image(game.cover);
        this.screenshots = game.screenshots.map((image) => new Image(image));
        this.artworks = game.artworks.map((image) => new Image(image));
        this.videos = game.videos;
        this.storyline = game.storyline;
        this.summary = game.summary;
    }

    public get developerCompanies(): Array<Company> {
        return this.involvedCompanies.filter((c) => c.developer).map((c) => c.company);
    }

    public get publisherCompanies(): Array<Company> {
        return this.involvedCompanies.filter((c) => c.publisher).map((c) => c.company);
    }
}

export class Image {
    public id!: string;
    public width!: number;
    public height!: number;

    public constructor(image: Image) {
        this.id = image.id;
        this.width = image.width;
        this.height = image.height;
    }

    public getScreenShotUrl(imageType: ImageType): string {
        return `https://images.igdb.com/igdb/image/upload/t_${imageType}/${this.id}.jpg`;
    }
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
    public publisher!: boolean;
}
