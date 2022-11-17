import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Watched } from 'src/app/models/watched';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  watchedList:Watched[] = [];
  movie:Movie[] = [];
  constructor() { }


  ngOnInit(): void {
    

  }

}
