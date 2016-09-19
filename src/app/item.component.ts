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
        if (name !== this.item.name) {
            this.action.emit({ type: CHANGE_ITEM_NAME, payload: {id: this.item.id, name} });
        }
        this.isInEditMode = false;
    }

    toggleDone() {
        this.action.emit({ type: TOGGLE_ITEM_CHECKED, payload: {id: this.item.id} });
        this.isInEditMode = false;
    }
}
