import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { watchMovKey } from '../secret';
import { Watched } from '../models/watched';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) { }
  url:string ="https://watchlist-4f2d.restdb.io/rest/wlisttable";

  getWatchedList():Observable<Watched> {
    return this.http.get<Watched>(this.url, {headers:{"x-apikey": watchMovKey}});

  }

  addWatchedMovie(movie:Watched):Observable<Watched> {
    return this.http.post<Watched>(this.url, movie, {headers:{"x-apikey": watchMovKey}})
  }

}
