import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from "src/environments/environment";
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MetricsComponent } from './metrics/metrics.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { RoleGuard } from './services/role.guard';
import { LoggedInGuard } from './services/logged-in.guard';
import { SearchFilterPipe } from './search-filter.pipe';
import { CheckboxFilterPipe } from './checkbox-filter.pipe';
import { MultiFilterPipe } from './multi-filter.pipe';
import { SexualHealthFilterPipe} from './sexualHealth-filter.pipe';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MentalHealthFilterPipe } from './mental-health-filter.pipe';
import { PhysicalHealthFilterPipe } from './physical-health-filter.pipe';
import { SubstanceUseHealthFilterPipe } from './substance-use-health-filter.pipe';
import { CommunityEngagementFilterPipe } from './community-engagement-filter.pipe';
import { InternationalFilterPipe } from './international-filter.pipe';
import { PopulationHealthFilterPipe } from './population-health-filter.pipe';
import { NutritionFilterPipe } from './nutrition-filter.pipe';
import { AcademicsFilterPipe } from './academics-filter.pipe';
import { DisabilityFilterPipe } from './disability-filter.pipe';
import { EnglishFilterPipe } from './english-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AffiliationPipe } from './affiliation.pipe';
import { AffiliationExternalPipe } from './affiliation-external.pipe';
import { FavouritesPipe } from './favourites.pipe';



//**ARCHIVED**
// import { ResourceDatabaseComponent } from './resource-database/resource-database.component';
// import { RdbresourceService} from './services/rdbresource.service';
// import { ResourceSearchComponent } from './resource-search/resource-search.component';
// import { RegisterStaffComponent } from './register-staff/register-staff.component';
// import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';
// import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    MetricsComponent,
    FeedbackComponent,
    StaffMemberComponent,
    SearchFilterPipe,
    CheckboxFilterPipe,
    MultiFilterPipe,
    SexualHealthFilterPipe,
    ForgotPasswordComponent,
    MentalHealthFilterPipe,
    PhysicalHealthFilterPipe,
    SubstanceUseHealthFilterPipe,
    CommunityEngagementFilterPipe,
    InternationalFilterPipe,
    PopulationHealthFilterPipe,
    NutritionFilterPipe,
    AcademicsFilterPipe,
    DisabilityFilterPipe,
    EnglishFilterPipe,
    AffiliationPipe,
    AffiliationExternalPipe,
    FavouritesPipe,
    
    //**ARCHIVED**
    // ResourceSearchComponent,
    // RegisterStaffComponent,
    // VolunteerMenuComponent,
    // ResourceDatabaseComponent,
    // AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [{ provide: LoggedInGuard, useClass: LoggedInGuard}, { provide: RoleGuard, useClass: RoleGuard}],
  bootstrap: [AppComponent]
})
export class AppModule { }
