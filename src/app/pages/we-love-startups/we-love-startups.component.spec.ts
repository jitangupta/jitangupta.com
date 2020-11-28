import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeLoveStartupsComponent } from './we-love-startups.component';

describe('WeLoveStartupsComponent', () => {
  let component: WeLoveStartupsComponent;
  let fixture: ComponentFixture<WeLoveStartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeLoveStartupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeLoveStartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
