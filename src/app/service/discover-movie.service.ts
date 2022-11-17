import { Injectable } from '@angular/core';
import { api_key } from '../secret';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
import { Result } from '../models/result';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class DiscoverMovieService {

  constructor(private http:HttpClient) { }
    result_id:Result = {} as Result;
  url:string ="https://api.themoviedb.org/3/discover/movie?"

  imageUrl:string = "https://image.tmdb.org/t/p/w440_and_h660_face/"

getMovieList():Observable<Movies> {
  return this.http.get<Movies>(`${this.url}api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrat`)
}

geMovieById(result_id: number):Observable<Movie> {
  return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${result_id}?api_key=${api_key}`);
}

  
}
