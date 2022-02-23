import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourceSearchComponent } from './resource-search/resource-search.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import {LoggedInGuard} from './logged-in.guard';
import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';
import { ResourceDatabaseComponent } from './resource-database/resource-database.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleGuard } from './role.guard';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registerstaff', component: RegisterStaffComponent,canActivate:[RoleGuard]},
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
  { path: 'resourcesearch', component: ResourceSearchComponent, canActivate: [LoggedInGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'volunteermenu', component: VolunteerMenuComponent, canActivate: [LoggedInGuard]},
  { path: 'resourcedatabase', component: ResourceDatabaseComponent, canActivate: [LoggedInGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [LoggedInGuard]},
  { path: '404', component: NotFoundComponent, canActivate: [LoggedInGuard]},
  { path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
