import { Component, OnInit } from '@angular/core';
import { DiscoverMovieService } from 'src/app/service/discover-movie.service';

@Component({
  selector: 'app-discover-movie',
  templateUrl: './discover-movie.component.html',
  styleUrls: ['./discover-movie.component.css']
})
export class DiscoverMovieComponent implements OnInit {
 

  constructor(private movielist:DiscoverMovieService) { }

  ngOnInit(): void {
    this.movielist.getMovieList().subscribe((m)=>{
      console.log(m.results)
    })
   
  }

}
