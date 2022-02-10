import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourceSearchComponent } from './resource-search/resource-search.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import {LoggedInGuard} from './logged-in.guard';
import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registerstaff', component: RegisterStaffComponent, canActivate: [LoggedInGuard]},
  { path: 'menu', component: MenuComponent, canActivate: [LoggedInGuard] },
  { path: 'resourcesearch', component: ResourceSearchComponent, canActivate: [LoggedInGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'volunteermenu', component: VolunteerMenuComponent, canActivate: [LoggedInGuard]},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
