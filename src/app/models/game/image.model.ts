import {ImageType} from '../../enums/image-type.enum';

export class Image {
    public id!: string;

    public constructor(image: Image) {
        this.id = image.id;
    }

    public getScreenShotUrl(imageType: ImageType): string {
        return `https://images.igdb.com/igdb/image/upload/t_${imageType}/${this.id}.jpg`;
    }
}
