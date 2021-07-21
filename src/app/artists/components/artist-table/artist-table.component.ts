import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../../core/services/artists.service'
import { Artist } from '../../../core/models/artist.model'

@Component({
  selector: 'app-artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.scss']
})
export class ArtistTableComponent implements OnInit {

  artists: Artist[] = [];

  constructor(
    private artistsService: ArtistsService
  ) { }

  displayedColumns = ['Artist Name', 'Details'];

  ngOnInit(): void {
    this.fetchArtists()
  }

  fetchArtists(){
    this.artistsService.getAllArtists()
      .subscribe((artists) => {
        this.artists = artists
        console.log(this.artists)
      })
  }

}
