import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'include',
})
export class IncludePipe implements PipeTransform {
    public transform(items: string | string[], searchPhrase: string): boolean {
        const lowerCasedSearchPhrase = searchPhrase.toLowerCase();

        if (typeof items === 'string') return items.toLowerCase().includes(lowerCasedSearchPhrase);
        return items.some((item) => item.toLowerCase().includes(lowerCasedSearchPhrase));
    }
}
