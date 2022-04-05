import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {LoggedInGuard} from './services/logged-in.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleGuard } from './services/role.guard';
import { MetricsComponent } from './metrics/metrics.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
//**ARCHIVED**
// import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';
// import { ResourceDatabaseComponent } from './resource-database/resource-database.component';
// import { ResourceSearchComponent } from './resource-search/resource-search.component';
// import { RegisterStaffComponent } from './register-staff/register-staff.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'staffmember', component: StaffMemberComponent,canActivate:[RoleGuard]},
  { path: 'metrics', component: MetricsComponent,canActivate:[RoleGuard]},
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [LoggedInGuard]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [LoggedInGuard]},
  { path: '404', component: NotFoundComponent, canActivate: [LoggedInGuard]},
  { path: '**', redirectTo: '/404'}
  // { path: 'volunteermenu', component: VolunteerMenuComponent, canActivate: [LoggedInGuard]},
  // { path: 'resourcedatabase', component: ResourceDatabaseComponent, canActivate: [LoggedInGuard]},
  // { path: 'resourcesearch', component: ResourceSearchComponent, canActivate: [LoggedInGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
