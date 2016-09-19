import { Item } from '../models';
import { Action } from '../actions'

export const ADD_ITEM = 'add_item';
export const CHANGE_ITEM_NAME = 'edit_item';
export const TOGGLE_ITEM_CHECKED = 'toggle_checked';

export const items = (items: Item[] = [], action: Action) => {
	switch (action.type) {
		case ADD_ITEM:
			let newItem: Item = {
				id: Math.floor((1 + Math.random()) * 0x10000).toString(16),
				name: 'Nova polozka',
				isChecked: false,
			};
			return items.concat([newItem]);

		case CHANGE_ITEM_NAME:
			return items.map(
				item => {
					if (item.id === action.payload.id) {
					 return Object.assign({}, item, {name: action.payload.name});
					}
					return item;
				} 
			).filter(item => item.name.length);
			
		case TOGGLE_ITEM_CHECKED:
			return items.map(
				item => {
					if (item.id === action.payload.id) {
					 return Object.assign({}, item, {isChecked: !item.isChecked});
					}
					return item;
				} 
			);
	}
};