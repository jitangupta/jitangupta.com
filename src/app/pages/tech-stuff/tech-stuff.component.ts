import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stuff',
  template: `
    <div class="section tech-stuff miscelanious-is-a-funny-word">
      <div class="main-content-wrapper">
        <div class="content">
          <h3 class="main-heading">&lt;<span class="tech-color">Developer</span>&#47;&gt;</h3>
          <p>Here are few highlights of my developer contribution and activity through out web</p>
          <!-- stats-->
          <div class="responsive">
            <div class="d-flex">
              <a href="https://stackoverflow.com/users/8178474/jitan-gupta"><img
                  src="https://stackoverflow.com/users/flair/8178474.png?theme=clean" class="smooth-border" width="208"
                  height="58"
                  alt="profile for Jitan Gupta at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                  title="profile for Jitan Gupta at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></a>
              <a href="https://www.c-sharpcorner.com/members/jitan-gupta">
                <img src="https://www.c-sharpcorner.com/members/jitan-gupta/flair.png" class="smooth-border" width="260" height="58"
                  alt="profile for Jitan C# Corner - A Social Community of Developers and Programmers"
                  title="profile for Jitan at C# Corner - A Social Community of Developers and Programmers" />
              </a>
            </div>
            Github Contribution Chart
            <img src="https://ghchart.rshah.org/f48024/jitangupta" alt="JitanGupta's Github chart"
              class="smooth-border p-7" />
          </div>
        </div>
      </div>
      <!--Plugins-->
      <div class="main-content-wrapper in-the-year-2000">
        <div class="content">
          <h3>Plugins</h3>
          <p>Here are a few plugins/libs I have created.</p>
          <ul>
            <li class="attendance-calender">
              <div class="flexing-like-a-douche">
                <div class="detail">
                  <img src="/assets/images/attendance-calendar.png" />
                </div>
                <div class="wrapper">
                  <h4>Attendance Calender</h4>
                  <p>ATTENDANCE-CALENDAR help you display attendance related data with IN-OUT time in calendar format.
                    Available in both JavaScript and TypeScript. <a
                      href="http://www.creativebloq.com/web-design/how-mock-website-sketch-11513814" target="_blank">give
                      a star</a></p>
                </div>
              </div>
            </li>
            <li class="manyajs">
              <div class="flexing-like-a-douche">
                <div class="detail">
                  <img src="/assets/images/manya.js.gif" />
                </div>
                <div class="wrapper">
                  <h4>ManyaJS</h4>
                  <p>"Manya JS" helps to validate HTML form. (outdated)
                    <!--<a
                      href="https://github.com/jitangupta/manyajs"
                      target="_blank">give a star</a>-->
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--Articles-->
      <app-article></app-article>
    </div>
  `,
  styles: [
  ]
})
export class TechStuffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
