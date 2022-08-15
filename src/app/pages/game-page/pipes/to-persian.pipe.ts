import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toPersian',
})
export class ToPersianPipe implements PipeTransform {
    public transform(value: number | Date): string {
        if (typeof value === 'number')
            return new Intl.NumberFormat('fa-IR', {
                currency: 'IRR',
            }).format(value);

        return new Intl.DateTimeFormat('fa-IR').format(value);
    }
}
