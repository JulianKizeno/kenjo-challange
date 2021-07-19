import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormEditComponent } from './artist-form-edit.component';

describe('ArtistFormEditComponent', () => {
  let component: ArtistFormEditComponent;
  let fixture: ComponentFixture<ArtistFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
