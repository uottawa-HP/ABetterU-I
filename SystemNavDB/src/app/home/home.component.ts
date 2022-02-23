import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthenticationService) {
    // this.router.events
    //   .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    //   .subscribe(event => {
    //     if (
    //       event.id === 1 &&
    //       event.url === event.urlAfterRedirects
    //     ) {
    //       this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    //       this.router.navigate(['/home']);
    //       });
    //     }
    //   })




  }

  ngOnInit(): void {
  }


  // async refresh(): Promise<void> {
  //   this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['/home']);
  //   });
  // }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }




}
