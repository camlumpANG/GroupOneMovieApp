import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { DiscoverMovieService } from 'src/app/service/discover-movie.service';

@Component({
  selector: 'app-discover-movie',
  templateUrl: './discover-movie.component.html',
  styleUrls: ['./discover-movie.component.css']
})
export class DiscoverMovieComponent implements OnInit {
 
  movieList:Movies = {} as Movies;
  constructor(private discoverMovieService:DiscoverMovieService) { }

  ngOnInit(): void {
    this.discoverMovieService.getMovieList().subscribe((response:Movies)=>{
      console.log(response.results);
      this.movieList = response;
    })
   
  }
}
