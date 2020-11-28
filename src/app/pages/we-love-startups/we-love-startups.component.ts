import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-love-startups',
  template: `
    <!--Work-->
    <div class="work" id="work">
      <div class="we-love-startups">
        <h2 class="work-heading">We Love Startups</h2>
        <p class="details">
          A community for entrepreneurs, startup founders, developers, ui/ux
          designers, marketers, social media influencers, photographers, and
          bloggers.
        </p>
        <div class="links-and-tags">
          <div class="tag">Product Strategy</div>
          <div class="tag">UI Design</div>
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
