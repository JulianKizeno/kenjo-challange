import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { AlbumsService } from '../../../core/services/albums.service'
import { ArtistsService } from '../../../core/services/artists.service'
import { Album } from '../../../core/models/album.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  public album: Album;
  public artistId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService,
    private artistsService: ArtistsService,
    private router: Router
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) =>{
      const id = params.id
      this.fetchAlbum(id)
      this.fetchArtist(id)
    })
    console.log(this.album)
  }

  fetchAlbum(id: string){
    this.albumsService.getAlbum(id)
      .subscribe(album =>{
        this.album = album
        this.artistId = album.artistId
        console.log(album)
        console.log(this.artistId)
      })
  }

  fetchArtist(id: string){
    this.artistsService.getArtist(id)
      .subscribe(artist =>{
        console.log(artist)
      })
  }

  deleteAlbum(id: string){
    this.albumsService.deleteAlbum(id)
      .subscribe(albums => {
        console.log(albums)
        this.router.navigate(['./albums'])
      })
  }

}
