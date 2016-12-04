import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item, ItemValue } from './models';
import { CHANGE_ITEM, REMOVE_ITEM } from './reducers/index';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls:  ['item.component.css']
})
export class ItemComponent {
    @Input()
    item: Item;
    isInEditMode: boolean = false;
    @Output() 
    action = new EventEmitter();

    updateName(name: string) {
        if (name === '') {
            this.action.emit({ type: REMOVE_ITEM, payload: {key: this.item.$key} });
        } else if (name !== this.item.value.name) {
            let value: ItemValue = {
                name: name,
                isChecked: this.item.value.isChecked
            }
            this.action.emit({ type: CHANGE_ITEM, payload: {key: this.item.$key, value} });
        }
        this.isInEditMode = false;
    }

    removeItem() {
         this.action.emit({ type: REMOVE_ITEM, payload: {key: this.item.$key} });
         this.isInEditMode = false;
    }

    toggleDone() {
        let value: ItemValue = {
            name: this.item.value.name,
            isChecked: !this.item.value.isChecked
        }
        this.action.emit({ type: CHANGE_ITEM, payload: {key: this.item.$key, value} });
        this.isInEditMode = false;
    }
}
