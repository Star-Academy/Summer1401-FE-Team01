import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'roundNumberToHalf',
})
export class RoundNumberToHalfPipe implements PipeTransform {
    public transform(num: number): number {
        const trunc = Math.floor(num);
        let frac = num - trunc;

        if (frac <= 0.25) frac = 0;
        else if (frac <= 0.75) frac = 0.5;
        else frac = 1;

        return trunc + frac;
    }
}
