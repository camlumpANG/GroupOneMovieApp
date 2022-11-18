import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { watchMovKey } from '../secret';
import { Watched } from '../models/watched';
import { DbParams } from '../models/db-params';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) { }
  url:string ="https://watchlist-4f2d.restdb.io/rest/wlisttable2";

  getWatchedList():Observable<DbParams[]> {

    return this.http.get<DbParams[]>(this.url, {headers:{"x-apikey": watchMovKey}});

  }
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };
  addWatchedMovie(movie:any):Observable<Watched> {
    console.log(movie);
    
    return this.http.post<Watched>(this.url, movie, {headers:{"x-apikey": watchMovKey}})
    
  }

  deletWatchedMovie(movie_id:string):Observable<any> {
    return this.http.delete<any>(`${this.url}/${movie_id}`, {headers:{"x-apikey": watchMovKey}})
  }

}
