import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumDetailComponent } from './albums/components/album-detail/album-detail.component'
import { AlbumFormCreateComponent } from './albums/components/album-form-create/album-form-create.component'
import { TableComponent } from './albums/components/table/table.component'
import { AlbumFormEditComponent } from './albums/components/album-form-edit/album-form-edit.component'
import { ArtistTableComponent } from './artists/components/artist-table/artist-table.component'
import { ArtistFormCreateComponent } from './artists/components/artist-form-create/artist-form-create.component'
import { ArtistDetailComponent } from './artists/components/artist-detail/artist-detail.component'
import { ArtistFormEditComponent } from './artists/components/artist-form-edit/artist-form-edit.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full',  
  },
  {
    path: 'albums',
    component: TableComponent
  },
  {
    path: 'albums/create',
    component: AlbumFormCreateComponent
  },
  {
    path: 'albums/edit/:id',
    component: AlbumFormEditComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'artists',
    component: ArtistTableComponent
  },
  {
    path: 'artists/create',
    component: ArtistFormCreateComponent
  },
  {
    path: 'artists/:id',
    component: ArtistDetailComponent
  },
  {
    path: 'artists/edit/:id',
    component: ArtistFormEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
