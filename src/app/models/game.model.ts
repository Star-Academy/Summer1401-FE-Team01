import {ChecklistItem} from '../pages/search/models/checklist-item.model';
import {Company} from './game/company.model';
import {Image} from './game/image.model';
import {Video} from './game/video.model';
import {InvolvedCompany} from './game/involved-company.model';

export class Game {
    public id: number;
    public name: string;

    public price: number;
    public priceOnSale: number;

    public gameModes: Array<ChecklistItem>;
    public genres: Array<ChecklistItem>;
    public keywords: Array<ChecklistItem>;
    public platforms: Array<ChecklistItem>;
    public themes: Array<ChecklistItem>;
    public playerPerspectives: Array<ChecklistItem>;

    public involvedCompanies: Array<InvolvedCompany>;

    public rating: number;
    public ratingCount: number;

    public releaseDate: number;

    public cover: Image;
    public screenshots: Array<Image>;
    public artworks: Array<Image>;
    public videos: Array<Video>;

    public storyline: string;
    public summary: string;

    public constructor(game: Game) {
        this.id = game.id || 0;
        this.name = game.name || '';
        this.price = game.price || 0;
        this.priceOnSale = game.priceOnSale || 0;
        this.gameModes = game.gameModes || '';
        this.genres = game.genres || '';
        this.keywords = game.keywords || '';
        this.platforms = game.platforms || '';
        this.themes = game.themes || '';
        this.playerPerspectives = game.playerPerspectives || '';
        this.involvedCompanies = game.involvedCompanies || '';
        this.rating = game.rating || 0;
        this.ratingCount = game.ratingCount || 0;
        this.releaseDate = game.releaseDate || 0;
        this.cover = new Image(game.cover || '');
        this.screenshots = game.screenshots.map((image) => new Image(image)) || [];
        this.artworks = game.artworks.map((image) => new Image(image)) || [];
        this.videos = game.videos || '';
        this.storyline = game.storyline || '';
        this.summary = game.summary || '';
    }

    public get releaseDateType(): Date {
        return new Date(this.releaseDate);
    }

    public get salePercentage(): number | null {
        if (this.price === this.priceOnSale) return null;

        return 100 - Math.floor((this.priceOnSale / this.price) * 100);
    }

    public get developerCompanies(): Array<Company> {
        return this.involvedCompanies.filter((c) => c.developer).map((c) => c.company);
    }

    public get publisherCompanies(): Array<Company> {
        return this.involvedCompanies.filter((c) => c.publisher).map((c) => c.company);
    }
}
