import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormCreateComponent } from './artist-form-create.component';

describe('ArtistFormCreateComponent', () => {
  let component: ArtistFormCreateComponent;
  let fixture: ComponentFixture<ArtistFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
