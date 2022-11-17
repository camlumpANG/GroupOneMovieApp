import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverMovieComponent } from './components/discover-movie/discover-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

const appRoutes:Routes = [
  {path: 'movies', component: DiscoverMovieComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'watchedlist', component: WatchListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DiscoverMovieComponent,
    MovieDetailComponent,
    HeaderComponent,
    PageNotFoundComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
