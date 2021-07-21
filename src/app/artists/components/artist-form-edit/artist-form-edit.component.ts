import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ArtistsService } from '../../../core/services/artists.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-artist-form-edit',
  templateUrl: './artist-form-edit.component.html',
  styleUrls: ['./artist-form-edit.component.scss']
})
export class ArtistFormEditComponent implements OnInit {

  form: FormGroup
  id: string

  constructor(
    private formBuilder: FormBuilder,
    private artistsService: ArtistsService,
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
        this.artistsService.getArtist(this.id)
          .subscribe(product => {
            this.form.patchValue(product)
          })
    })
  }

  editArtist(event: Event){
    event.preventDefault()
    console.log(this.form.value)
    if (this.form.valid){
      const Artist = this.form.value
      this.artistsService.updateArtist(this.id, Artist)
        .subscribe((newArtist) => {
        console.log(newArtist)
        this.router.navigate([`./artists/${this.id}`])
      })
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      photoUrl: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      deathDate: '',
    })
  }

}
