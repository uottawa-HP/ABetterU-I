import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthenticationService) {
    // this.router.events
    //   .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    //   .subscribe(event => {
    //     if (
    //       event.id === 1 &&
    //       event.url === event.urlAfterRedirects
    //     ) {
    //       this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(() => {
    //       this.router.navigate(['/menu']);
    //       });
    //     }
    //   })




  }

  ngOnInit(): void {
  }


  // async refresh(): Promise<void> {
  //   this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['/menu']);
  //   });
  // }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }




}
