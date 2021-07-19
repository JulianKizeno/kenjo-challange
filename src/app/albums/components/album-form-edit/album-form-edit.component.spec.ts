import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormEditComponent } from './album-form-edit.component';

describe('AlbumFormEditComponent', () => {
  let component: AlbumFormEditComponent;
  let fixture: ComponentFixture<AlbumFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
