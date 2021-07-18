import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../services/albums.service'
import { Album } from '../../../models/album.model'


@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albums: Album[] = [];

  constructor(
    private albumsService: AlbumsService
  ) { }

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

  createNewAlbum(){
    const newAlbum: Album = {
      _id:'60f3f72a4ab61600138c9332',
      title: 'Santorini',
      artistId: null,
      coverUrl: 'https://i.imgur.com/sya6aoH.jpg',
      year: 1990,
      genre: 'k-pop'
    }
    this.albumsService.createAlbum(newAlbum)
      .subscribe(albums => {
        console.log(albums)
      })
  }   

}
