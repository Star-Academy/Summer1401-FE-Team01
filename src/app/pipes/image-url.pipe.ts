import {Pipe, PipeTransform} from '@angular/core';
import {ImageType} from '../enums/image-type.enum';
import {Image} from '../models/game/image.model';

@Pipe({
    name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
    public transform(image: Image, imageType: ImageType): string {
        return `https://images.igdb.com/igdb/image/upload/t_${imageType}/${image.id}.jpg`;
    }
}
