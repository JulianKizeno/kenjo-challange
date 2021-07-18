import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../models/album.model'
import { AlbumsService } from '../../../services/albums.service'


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input()album: Album; 

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    console.log(this.album)
  }

  deleteAlbum(){
    this.albumsService.deleteAlbum('60f3f72a4ab61600138c9332')
      .subscribe(albums => {
        console.log(albums)
      })
  }

}
