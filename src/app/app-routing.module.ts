import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsListComponent } from './albums/components/albums-list/albums-list.component'
import { AlbumDetailComponent } from './albums/components/album-detail/album-detail.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full',  
  },
  {
    path: 'albums',
    component: AlbumsListComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
