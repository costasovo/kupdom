import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './models';
import { AppStore } from './store';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ADD_ITEM } from './reducers/index' 

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 
	itemsToBuy: Observable<Item[]>;

	constructor( public store: Store<AppStore> ) {
		this.itemsToBuy = store.select(s => s.items);
	}

	addItem() {
		this.store.dispatch({
			type: ADD_ITEM
		});
	}
}
