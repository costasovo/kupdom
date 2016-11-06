import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './models';
import { AppStore } from './store';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ADD_ITEM } from './reducers/index' 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent { 
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
