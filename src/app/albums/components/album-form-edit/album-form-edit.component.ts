import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AlbumsService } from '../../../core/services/albums.service'
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-album-form-edit',
  templateUrl: './album-form-edit.component.html',
  styleUrls: ['./album-form-edit.component.scss']
})
export class AlbumFormEditComponent implements OnInit {

  form: FormGroup
  id: string

  constructor(
    private formBuilder: FormBuilder,
    private albumsService: AlbumsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.buildForm()
   }

  ngOnInit(): void {  
    this.activatedRoute.params
      .subscribe((params: Params)=>{
        console.log(params.id)
        this.id = params.id
        this.albumsService.getAlbum(this.id)
          .subscribe(product => {
            this.form.patchValue(product)
          })
    })
  }

  editAlbum(event: Event){
    event.preventDefault()
    console.log(this.form.value)
    if (this.form.valid){
      const album = this.form.value
      this.albumsService.updateAlbum(this.id, album)
        .subscribe((newAlbum) => {
        console.log(newAlbum)
        this.router.navigate([`./albums/${this.id}`])
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
