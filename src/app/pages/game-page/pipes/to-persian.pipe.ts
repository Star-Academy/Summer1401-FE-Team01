import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toPersian',
})
export class ToPersianPipe implements PipeTransform {
    public transform(value: number): string {
        return new Intl.NumberFormat('fa-IR', {
            currency: 'IRR',
        }).format(value);
    }
}
