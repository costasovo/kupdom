import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

// Components
import { AppComponent }  from './app.component';
import { ItemComponent }  from './item.component';

// Reducers
import { items } from './reducers/index'

let storeModule: ModuleWithProviders = StoreModule.provideStore({items}, {items: []});
let storeDevtoolsModule: ModuleWithProviders = StoreDevtoolsModule.instrumentStore({
	maxAge: 10,
	monitor: useLogMonitor({
		visible: true,
		position: 'right'
		})
	})

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
	StoreLogMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
