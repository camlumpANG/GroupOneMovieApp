import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMovieComponent } from './discover-movie.component';

describe('DiscoverMovieComponent', () => {
  let component: DiscoverMovieComponent;
  let fixture: ComponentFixture<DiscoverMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
