import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ADD_ITEM, DATABASE_UPDATED, CHANGE_ITEM } from '../reducers/index';
import { Item, ItemValue } from '../models/index';
import { AppStore } from '../store';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class ItemsEffects {
	items: FirebaseListObservable<any>

	constructor(private actions$: Actions, public store: Store<AppStore>, af: AngularFire, ) { 
		this.items = af.database.list('/items1');
		this.items.subscribe((data) => {
			let updateAction: Action = {
				type: DATABASE_UPDATED,
				payload: data
			};
			this.store.dispatch(updateAction);
		});
	}

	@Effect({dispatch: false}) addItem = this.actions$
		.ofType(ADD_ITEM)
		.map(() => { 
			let newItem: ItemValue = {
				name: 'Nova polozka',
				isChecked: false,
			};
			this.items.push({value: newItem});
		});
	
	@Effect({dispatch: false}) changeItem = this.actions$
		.ofType(CHANGE_ITEM)
		.map((action: Action) => { 
			this.items.update(action.payload.key, {value: action.payload.value});
		});
}