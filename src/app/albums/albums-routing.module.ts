import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumDetailComponent } from '../albums/components/album-detail/album-detail.component';
import { AlbumComponent } from '../albums/components/album/album.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent
  },
  {
    path: ':id',
    component: AlbumDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {}