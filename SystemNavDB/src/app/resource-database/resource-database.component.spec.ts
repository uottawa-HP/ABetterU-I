import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDatabaseComponent } from './resource-database.component';

describe('ResourceDatabaseComponent', () => {
  let component: ResourceDatabaseComponent;
  let fixture: ComponentFixture<ResourceDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
