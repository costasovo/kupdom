import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ADD_ITEM } from '../reducers/index';
import { Item, ItemValue } from '../models/index';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class ItemsEffects {
	items: FirebaseListObservable<any>

	constructor(private actions$: Actions, af: AngularFire) { 
		this.items = af.database.list('/items1');
		this.items.map((itemData) => { console.log('itemData')});
	}

	@Effect({ dispatch: false }) addItem = this.actions$
		.ofType(ADD_ITEM)
		.map(() => {
			let newItem: ItemValue = {
				name: 'Nova polozka',
				isChecked: false,
			};
			this.items.push(newItem);
		});
}