import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { AngularFireModule } from 'angularfire2';
import { config } from './config';

// Components
import { AppComponent }  from './app.component';
import { ItemComponent }  from './item.component';

// Store completition (reducers, effets and monitoring)
import { items } from './reducers/index'
import { ItemsEffects } from './effects/items'

let storeModule: ModuleWithProviders = StoreModule.provideStore({items}, {items: []});
let storeDevtoolsModule: ModuleWithProviders = StoreDevtoolsModule.instrumentStore({
	maxAge: 10,
	monitor: useLogMonitor({
		visible: true,
		position: 'right'
		})
	})
let storeEffectsModule = EffectsModule.run(ItemsEffects)

// Firebase 
// Must export the config
export const firebaseConfig = {
	apiKey: config.firebase.apiKey,
	authDomain: config.firebase.authDomain,
	databaseURL: config.firebase.databaseURL,
	storageBucket: config.firebase.storageBucket,
	messagingSenderId: config.firebase.messagingSenderId
};

@NgModule({
	declarations: [
 		AppComponent,
		ItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		storeModule,
		storeDevtoolsModule,
		storeEffectsModule,
		StoreLogMonitorModule,
		AngularFireModule.initializeApp(firebaseConfig),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
