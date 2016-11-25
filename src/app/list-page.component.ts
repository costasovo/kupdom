import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'list-page',
    templateUrl: './list-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent { 
	isDev: boolean = !environment.production;
	constructor( ) {}
}
