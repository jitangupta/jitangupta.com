import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleToMeetComponent } from './pages/people-to-meet/people-to-meet.component';
import { ArticleComponent } from './pages/article/article.component';
import { WeLoveStartupsComponent } from './pages/we-love-startups/we-love-startups.component';
import { TechStuffComponent } from './pages/tech-stuff/tech-stuff.component';
import { RuhanComponent } from './pages/ruhan/ruhan.component';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PeopleToMeetComponent, ArticleComponent, WeLoveStartupsComponent,
    TechStuffComponent, RuhanComponent, ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
