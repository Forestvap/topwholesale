import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from '../item.interface';
import { ITEMS } from '../mock-items';

@Injectable()
export class ItemService {

    constructor() { }

    getItems(): Observable<Item[]> {
        // this.messageService.add(`ItemService: fetched item`);
        return of(ITEMS);

    }
    // getItem(id: number): Observable<Item> {
    //     // this.messageService.add(`ItemService: fetched item id=${id}`);
    //     return of(ITEMS.find(item => item.id === id));
    // }
}