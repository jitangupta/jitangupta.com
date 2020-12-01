import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuhanComponent } from './ruhan.component';

describe('RuhanComponent', () => {
  let component: RuhanComponent;
  let fixture: ComponentFixture<RuhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
