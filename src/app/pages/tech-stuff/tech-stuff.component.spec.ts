import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStuffComponent } from './tech-stuff.component';

describe('TechStuffComponent', () => {
  let component: TechStuffComponent;
  let fixture: ComponentFixture<TechStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
