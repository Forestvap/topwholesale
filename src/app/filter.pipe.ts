import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './item.interface';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(allItems: Item[], selectCategory: string) {
        if(!selectCategory) return allItems;
        return allItems.filter(item => item.category === selectCategory);
    }
}