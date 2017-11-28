import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { BeaniesComponent } from './beanies/items.component';
const routes: Routes = [
  { path: '', redirectTo: '/caps', pathMatch: 'full' },
  { path: 'caps', component: ItemsComponent },
  { path: 'beanies', component: BeaniesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }