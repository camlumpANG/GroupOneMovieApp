import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { DiscoverMovieService } from 'src/app/service/discover-movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Result = {} as Result;
    movieDetail:Movie = {} as Movie;
  constructor(private movieService:DiscoverMovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));

    this.movieService.geMovieById(id).subscribe((response)=>{
      console.log(response);
       this.movieDetail = response;
    })


  }

}
