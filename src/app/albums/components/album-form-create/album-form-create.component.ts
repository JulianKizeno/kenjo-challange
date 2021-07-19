import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AlbumsService } from '../../../services/albums.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-album-form-create',
  templateUrl: './album-form-create.component.html',
  styleUrls: ['./album-form-create.component.scss']
})
export class AlbumFormCreateComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private albumsService: AlbumsService,
    private router: Router
  ) { 
    this.buildForm()
   }

  ngOnInit(): void {  
  }

  saveAlbum(event: Event){
    event.preventDefault()
    console.log(this.form.value)
    if (this.form.valid){
      const album = this.form.value
      this.albumsService.createAlbum(album)
        .subscribe((newAlbum) => {
        console.log(newAlbum)
        this.router.navigate(['./albums'])
      })
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      coverUrl: ['', [Validators.required]],
      year: ['', [Validators.required]],
      genre: ['', [Validators.required]],
    })
  }

}
