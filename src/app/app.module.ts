import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module'

import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums/components/albums-list/albums-list.component';
import { AlbumDetailComponent } from './albums/components/album-detail/album-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumComponent } from './albums/components/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    AlbumDetailComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
