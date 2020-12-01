import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PeopleLikeToMeet, PEOPLE_LIKE_TO_MEET } from 'src/app/core/data/people-id-like-to-meet';

@Component({
  selector: 'app-people-to-meet',
  template: `
  <div class="main-content-wrapper people-id-like-to-meet">
    <div class="content">
      <h3 class="p-t-100">People I'd like to meet</h3>
      <p>I've been fortunate enough to meet some of my heroes, but I still have a long way to go.<br />This is a list of
        people I'd like to high five IRL.</p>
        <!--TODO:Change people color based on background-->
      <!-- <p class="note">
        <span class="poet">Poet</span>
        <span class="life-coach">Life Coach/Mentor</span>
        <span class="entrepreure">Entrepreure/Business Man</span>
        <span class="influencer">Influencer</span>
      </p> -->
      <ul>
        <li *ngFor="let person of people" [ngClass]="{'checked': person.haveMet}" class="{{person.background}}">
          <span class="tick" (click)="notWorks()"></span>
          <a target="_blank" href="{{person.url}}">{{person.name}}</a>
        </li>
      </ul>
    </div>
  </div>

  <img src="/assets/images/not-how-this-works.png" id="easterNope" #easterNope class="easter not-how-this-works" />
  `,
})
export class PeopleToMeetComponent implements OnInit {

  @ViewChild('easterNope') easterNope: ElementRef<HTMLImageElement>;

  people: PeopleLikeToMeet[];

  ngOnInit(): void {
    this.people = PEOPLE_LIKE_TO_MEET;
  }

  notWorks(): void {
    this.easterNope.nativeElement.className = 'popin';
    console.log('If you can make this happen though, or if you are this person, lets TALK ON TWITTER;');
    setTimeout(() => { this.popout(); }, 3000);
  }

  popout(): void {
    this.easterNope.nativeElement.className = 'popout';
  }
}
