import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component'
import { ListComponent } from '../app/components/list/list.component'
import { SongPageComponent } from './components/song-page/song-page.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'songs',
    component: ListComponent
  },
  {
    path: 'song-page',
    component: SongPageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
