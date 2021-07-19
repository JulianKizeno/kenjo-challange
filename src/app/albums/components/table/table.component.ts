import { Component, OnInit } from '@angular/core';

import { AlbumsService } from '../../../core/services/albums.service'
import { Album } from '../../../core/models/album.model'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  albums: Album[] = [];

  constructor(
    private albumsService: AlbumsService
  ) { }

  displayedColumns = ['Album Title', 'Year', 'Details'];

  ngOnInit(): void {
    this.fetchAlbums()
    console.log(this.albums)
  }

  fetchAlbums(){
    this.albumsService.getAllAlbums()
      .subscribe((albums) => {
        this.albums = albums
      })
  }

  

  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }


}
