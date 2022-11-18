import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { DiscoverMovieService } from 'src/app/service/discover-movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { DbService } from 'src/app/service/db.service';
import { Watched } from 'src/app/models/watched';
import { provideCloudinaryLoader } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Result = {} as Result;
    movieDetail:Movie = {} as Movie;
    movie_w:Watched = {} as Watched;
    watched:Watched[] = [];
  constructor(private movieService:DiscoverMovieService, private dbService:DbService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));

    this.movieService.geMovieById(id).subscribe((response)=>{
      console.log(response);
       this.movieDetail= response;
    })
  
  }
  addMovieToWatchList():any {
    const payload:any = {
      id:this.movieDetail.id,
      title:this.movieDetail.title,
      overview:this.movieDetail.overview,
      backdrop_path:this.movieDetail.poster_path

    }
     
      
     
      this.dbService.addWatchedMovie(payload).subscribe((response)=> {
        console.log("response", response);
        console.log("movieDetail", this.movieDetail);
        this.movie_w._id =response._id;
        this.watched.push(this.movie_w);
        console.log("Array: ", this.watched)
      })

  }
  // addMovieToWatchList():<any> {
    
  //   this.dbService.addWatchedMovie(this.movie).subscribe((response)=>{
  //     console.log(response)
  // }

  // }

}
