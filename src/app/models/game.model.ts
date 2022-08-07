import {ChecklistItem} from '../pages/search/models/checklist-item.model';

export class Game {
    public id!: number;
    public name!: string;

    public gameModes!: Array<ChecklistItem>;
    public genres!: Array<ChecklistItem>;
    public keywords!: Array<ChecklistItem>;
    public platforms!: Array<ChecklistItem>;
    public themes!: Array<ChecklistItem>;
    public playerPerspectives!: Array<ChecklistItem>;

    private involvedCompanies!: Array<InvolvedCompany>;

    public rating!: number;
    public ratingCount!: number;

    public releaseDate!: number;

    public cover!: Image;
    public screenShots!: Array<Image>;
    public videos!: Array<Video>;

    public storyline!: string;
    public summary!: string;

    public get developerCompanies(): Array<Company> {
        return this.involvedCompanies.filter((c) => c.developer);
    }

    public get publisherCompanies(): Array<Company> {
        return this.involvedCompanies.filter((c) => c.publisher);
    }
}

export class Image {
    public id!: string;
    public width!: number;
    public height!: number;
}

export class Video {
    public id!: string;
    public name!: string;
}

export class Company {
    public id!: number;
    public name!: string;
    public logo!: Image;
    public url!: string;
}

export class InvolvedCompany extends Company {
    public developer!: boolean;
    public porting!: boolean;
    public publisher!: boolean;
    public supporting!: boolean;
}
