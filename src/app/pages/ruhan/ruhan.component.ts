import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ruhan',
  template: `
    <div class="section ruhan miscelanious-is-a-funny-word">
      <div class="main-content-wrapper">
        <div class="content">
          <h3 class="main-heading">Poet <img src="/assets/images/feather.png"></h3>
          <p>If you found me on stage and people are cheering Ruhan! Ruhan! Ruhan!<br>
            Don't get confused, it's just my poetic name.</p>
          <div id="youtubeContainer" #youtubeContainer>
              <section>
                <youtube-player videoId="-4PYoUA4mko" suggestedQuality="highres"
                  [height]="videoHeight" [width]="videoWidth" [startSeconds]="'0'">
                </youtube-player>
              </section>
         </div>
          <a href="https://www.youtube.com/channel/UCNsS1mGuUOfpO043fGzpbZA" target="_blank" class="external-link">Watch more videos on YouTube</a>
        </div>
      </div>
      <div class="main-content-wrapper">
        <div class="content">
          <h3>Shayri (Poems)</h3>
          <div class="shayri-container">
            <blockquote class="default shayri">
              <p>ज़िन्दगी को जी रहे थे और वो ख्वाब टूट गया,</p>
              <p>रात हसीन थी पर नींद आँखों से रूट गया,</p>
              <p>यूँही नहीं अब हम सारी रात जगा करते,</p>
              <p>किसी का साथ हमे जरुरी था जो हमसे छूट गया।</p>
            </blockquote>
            <blockquote class="default shayri">
              <p>अब देख तू ज्यादा नखरे ना दिखाया कर,</p>
              <p>प्यार है तो जाता, यूँ मेरे प्यार का मजाक ना उड़ाया कर,</p>
              <p>वरना जिद्द पे आ गए ना तो तू मेरे इतिहास में भी नज़र ना आएगी,</p>
              <p>किसी और की बाहों में होगी और फिर भी हमको चाहेगी।</p>
            </blockquote>
            <blockquote class="default shayri">
              <p>तेरी एक मुस्कान के खातिर पूरा दिन धूप में जल कर गुजार दिया,</p>
              <p>शाम को जब तुझको अपनी गोद मे लिया, तेरी एक हसीं ने वो सारा दर्द भुला दिया,</p>
              <p>सभी कहते है तुझे मेरी फूल सी पारी,</p>
              <p>तुझे भेज कर हमारी ज़िंदगी मे खुदा ने हमारा जीवन सवार दिया।</p>
            </blockquote>
          </div>
          <p>Don't worry, I have written a lot of poems "Shayri", will publish them all some day.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class RuhanComponent implements AfterViewInit, OnDestroy {

  @ViewChild('youtubeContainer') youtubeContainer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.youtubeContainer.nativeElement.clientWidth, 1200);
    // this.videoWidth = Math.min(document.getElementById('demoYouTubePlayer').clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
