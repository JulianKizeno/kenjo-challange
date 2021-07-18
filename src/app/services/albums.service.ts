import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Album } from '../models/album.model'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private httpClient: HttpClient,

  ) { }

  createAlbum(album: Album){
    return this.httpClient.post(`${environment.url_api}/album`, album)

  }

  getAllAlbums(){
    return this.httpClient.get<Album[]>(`${environment.url_api}/albums/all`)
  }

  getAlbum(id: string){
    return this.httpClient.get<Album>(`${environment.url_api}/album/${id}`)
  }

  updateAlbum(id: string, changes: Partial<Album>){
    return this.httpClient.put(`${environment.url_api}/album/${id}`, changes)
  }

  deleteAlbum(id: string){
    return this.httpClient.delete(`${environment.url_api}/album/${id}`)
  }
}
