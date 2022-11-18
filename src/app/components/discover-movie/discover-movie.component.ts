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
  filteredMovieList:Movies = {} as Movies;

  constructor(private discoverMovieService:DiscoverMovieService) { }

  ngOnInit(): void {
    this.discoverMovieService.getMovieList().subscribe((response:Movies)=>{
      console.log(response.results);
      this.movieList = JSON.parse(JSON.stringify(response));
      this.filteredMovieList = JSON.parse(JSON.stringify(response));
    })
   
  }

   movieByReview():any{
    const res = this.filteredMovieList.results.sort((a, b) => a.vote_average > b.vote_average? -1 : 1);
     this.filteredMovieList.results = res;
     
  }

  movieByPopularity():any{
    const res = this.filteredMovieList.results.sort((a, b) => a.popularity > b.popularity? -1 : 1);
     this.filteredMovieList.results = res;
     
  }
  movieByReleaseDate():any{
    const res = this.filteredMovieList.results.sort((a, b) => a.release_date > b.release_date? -1 : 1);
     this.filteredMovieList.results = res;
     
  }

  onChange(e:any):void {
    console.log(e.target.value);
    const selectedFilter = e.target.value;

    if(selectedFilter === 'review'){
      this.movieByReview();
    }
    else if(selectedFilter === 'popularity'){
      this.movieByPopularity()
    }
    else if(selectedFilter === 'releasedate'){
      this.movieByReleaseDate()
    }
    else if(selectedFilter==='default'){
      console.log(this.movieList.results)
      this.filteredMovieList = this.movieList;
    }
  }

}