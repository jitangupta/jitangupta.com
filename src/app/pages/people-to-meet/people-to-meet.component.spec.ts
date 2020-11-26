import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleToMeetComponent } from './people-to-meet.component';

describe('PeopleToMeetComponent', () => {
  let component: PeopleToMeetComponent;
  let fixture: ComponentFixture<PeopleToMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleToMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleToMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
