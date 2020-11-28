import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleToMeetComponent } from './pages/people-to-meet/people-to-meet.component';
import { ArticleComponent } from './pages/article/article.component';
import { WeLoveStartupsComponent } from './pages/we-love-startups/we-love-startups.component';
import { TechStuffComponent } from './pages/tech-stuff/tech-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleToMeetComponent,
    ArticleComponent,
    WeLoveStartupsComponent,
    TechStuffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
