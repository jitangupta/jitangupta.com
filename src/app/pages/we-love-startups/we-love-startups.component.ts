import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-love-startups',
  template: `
    <!--Work-->
    <div class="work" id="work">
      <div class="we-love-startups">
        <h2 class="main-heading">Community <img src="/assets/images/handshake.svg" /> Believer</h2>
        <p class="details">
          When I started believing in community, I built a community with my two other friends (Brijesh Tejani & Apoorv Kumar).
        </p>
        <p class="details">
          In community we used to do events and share our knowledge and learn from each others.
        </p>
        <div class="links-and-tags">
          <!-- <div class="tag">Product Strategy</div>
          <div class="tag">UI Design</div> -->
          <a class="link" href="https://www.welovestartups.in" target="_blank"
            >Visit now</a
          >
        </div>
        <div class="img-container">
          <img src="/assets/images/welovestartups.png" class="work-image" />
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class WeLoveStartupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
