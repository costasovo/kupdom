import { Item } from '../models';
import { Action } from '@ngrx/store';

export const ADD_ITEM = 'add_item';
export const DATABASE_UPDATED = 'database_updated';
export const CHANGE_ITEM = 'edit_item';
export const REMOVE_ITEM = 'remove_item';

export const items = (items: Item[] = [], action: Action) => {
	switch (action.type) {
		case DATABASE_UPDATED:
			return action.payload;
		default:
			return items;
	}
};