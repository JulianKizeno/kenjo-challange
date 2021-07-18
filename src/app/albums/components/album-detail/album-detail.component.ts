import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { AlbumsService } from '../../../services/albums.service'
import { Album } from '../../../models/album.model'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) =>{
      const id = params.id
      this.fetchAlbum(id)
    })
  }

  fetchAlbum(id: string){
    this.albumsService.getAlbum(id)
      .subscribe(album =>{
        this.album = album
      })
  }

  updateAlbum(){
    const updateAlbum: Partial<Album> = {
      title: 'Romeo santos',
      coverUrl: 'https://cdns-images.dzcdn.net/images/artist/27c204497e5c7e95fcf6e83c11e741a7/500x500.jpg',
      year: 2001,
      genre: 'Bachata'
    }
    this.albumsService.updateAlbum('60f3f72a4ab61600138c9332', updateAlbum)
      .subscribe(albums => {
        console.log(albums)
      })
  }

}
