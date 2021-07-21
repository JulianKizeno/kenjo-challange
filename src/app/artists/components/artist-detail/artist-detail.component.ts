import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ArtistsService } from '../../../core/services/artists.service'
import { Artist } from '../../../core/models/artist.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artist: Artist;

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistsService: ArtistsService,
    private router: Router
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) =>{
      const id = params.id
      console.log(id)
      this.fetchArtist(id)
    })
  }

  fetchArtist(id: string){
    this.artistsService.getArtist(id)
      .subscribe(artist =>{
        this.artist = artist
        console.log(artist)
      })
  }

  deleteArtist(id: string){
    this.artistsService.deleteArtist(id)
      .subscribe(artist => {
        console.log(artist)
        this.router.navigate(['./artists'])
      })
  }
}
