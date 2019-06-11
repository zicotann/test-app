import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component'
import { ListComponent } from '../app/components/list/list.component'
 
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'songs',
    component: ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
