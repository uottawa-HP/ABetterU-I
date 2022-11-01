import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from "src/environments/environment";
import { StaffMemberComponent } from './staff-member.component';
import { HttpClient  } from '@angular/common/http';

describe('StaffMemberComponent', () => {
  let component: StaffMemberComponent;
  let fixture: ComponentFixture<StaffMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        HttpClient
      ],
      declarations: [ StaffMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
