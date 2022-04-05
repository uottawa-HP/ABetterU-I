import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerMenuComponent } from './volunteer-menu.component';

describe('VolunteerMenuComponent', () => {
  let component: VolunteerMenuComponent;
  let fixture: ComponentFixture<VolunteerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
