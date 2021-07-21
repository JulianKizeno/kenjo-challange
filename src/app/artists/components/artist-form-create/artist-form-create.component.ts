import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ArtistsService } from '../../../core/services/artists.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-artist-form-create',
  templateUrl: './artist-form-create.component.html',
  styleUrls: ['./artist-form-create.component.scss']
})
export class ArtistFormCreateComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private artistsService: ArtistsService,
    private router: Router
  ) { 
    this.buildForm()
   }

  ngOnInit(): void {  
  }

  saveArtist(event: Event){
    event.preventDefault()
    console.log(this.form.value)
    if (this.form.valid){
      const artist = this.form.value
      this.artistsService.createArtist(artist)
        .subscribe((newArtist) => {
        console.log(newArtist)
        this.router.navigate(['./artists'])
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
