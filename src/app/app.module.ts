import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumDetailComponent } from './albums/components/album-detail/album-detail.component';
import { AlbumFormCreateComponent } from './albums/components/album-form-create/album-form-create.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './albums/components/table/table.component';
import { AlbumFormEditComponent } from './albums/components/album-form-edit/album-form-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailComponent,
    AlbumFormCreateComponent,
    HeaderComponent,
    TableComponent,
    AlbumFormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
