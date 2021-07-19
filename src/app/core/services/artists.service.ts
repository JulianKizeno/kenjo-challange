import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Artist } from '../models/artist.model'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(
    private httpClient: HttpClient,

  ) { }

  createArtist(artist: Artist){
    return this.httpClient.post(`${environment.url_api}/artist`, artist)

  }

  getAllArtists(){
    return this.httpClient.get<Artist[]>(`${environment.url_api}/artists/all`)
  }

  getArtist(id: string){
    return this.httpClient.get<Artist>(`${environment.url_api}/artist/${id}`)
  }

  updateArtist(id: string, changes: Partial<Artist>){
    return this.httpClient.put(`${environment.url_api}/artist/${id}`, changes)
  }

  deleteArtist(id: string){
    return this.httpClient.delete(`${environment.url_api}/artist/${id}`)
  }
}
