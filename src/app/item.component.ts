import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from './models';
import { CHANGE_ITEM_NAME, TOGGLE_ITEM_CHECKED } from './reducers/index';

@Component({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input()
    item: Item;
    isInEditMode: boolean = false;
    @Output() 
    action = new EventEmitter();

    updateName(name: string) {
        if (name !== this.item.$value.name) {
            this.action.emit({ type: CHANGE_ITEM_NAME, payload: {key: this.item.$key, name} });
        }
        this.isInEditMode = false;
    }

    toggleDone() {
        this.action.emit({ type: TOGGLE_ITEM_CHECKED, payload: {key: this.item.$key, isChecked: this.item.$value.isChecked}});
        this.isInEditMode = false;
    }
}
