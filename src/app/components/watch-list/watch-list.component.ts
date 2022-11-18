import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbParams } from 'src/app/models/db-params';
import { Movie } from 'src/app/models/movie';
import { Watched } from 'src/app/models/watched';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  watchedList:Watched[] = [];
  movies:Movie[] = [];
  watchedListMovies:DbParams[]= [];
  constructor(private dbService:DbService, private route:ActivatedRoute) { }


  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));

   this.getWatchedList();
   
  
  }

  getWatchedList():void {
    this.dbService.getWatchedList().subscribe((response)=>{
      console.log(response);
      this.watchedListMovies = response;
    })

  }
  removeMovie(_id:string):void {
    this.dbService.deletWatchedMovie(_id).subscribe((response)=>{
      console.log(response)
      this.getWatchedList();
      
    })
  }

}
