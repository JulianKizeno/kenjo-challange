import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumDetailComponent } from './albums/components/album-detail/album-detail.component'
import { AlbumFormCreateComponent } from './albums/components/album-form-create/album-form-create.component'
import { TableComponent } from './albums/components/table/table.component'
import { AlbumFormEditComponent } from './albums/components/album-form-edit/album-form-edit.component'

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
