import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent }   from './list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: ':id', component: ListPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}