import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'list-page',
    templateUrl: './list-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent { 
	constructor( ) {}
}
