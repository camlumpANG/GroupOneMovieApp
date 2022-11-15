import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverMovieComponent } from './components/discover-movie/discover-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverMovieComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
