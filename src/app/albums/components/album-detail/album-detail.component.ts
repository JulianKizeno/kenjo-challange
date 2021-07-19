import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { AlbumsService } from '../../../core/services/albums.service'
import { Album } from '../../../core/models/album.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
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

  deleteAlbum(id: string){
    this.albumsService.deleteAlbum(id)
      .subscribe(albums => {
        console.log(albums)
        this.router.navigate(['./albums'])
      })
  }

}
